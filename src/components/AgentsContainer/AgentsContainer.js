import React from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'
import { map, filter } from 'lodash'
import TasksList from './TasksList'
import TasksStatus from './TasksStatus'
import {EllipseButtonGroup} from 'components/commons/EllipseButtonGroup'
import { mockData, ALL, PHYSICAL, VIRTUAL } from 'constants/AgentsConstants'
import './AgentsContainer.less'

export default class AgentsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: mockData,
      machineFilter: ALL
    }
  }

  handleFilterMachine = (filterName) => {
    return () => {
      this.setState({
        machineFilter: filterName
      })
    }
  }

  render() {
    return (
      <Container fluid>
        {this.renderHeader()}
        {this.renderContent()}
      </Container>
    )
  }

  renderHeader() {
    return (
      <Segment inverted color='grey' vertical>
        <Grid stackable>
          <Grid.Column width={2} textAlign='center' verticalAlign='middle'>
            <Header as='h2' className='pane-header'>Agents</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <EllipseButtonGroup
              buttonNames={[ALL, PHYSICAL, VIRTUAL]}
              onClick={this.handleFilterMachine}
              activeButtonName={this.state.machineFilter}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }

  renderContent() {
    const { tasks, machineFilter} = this.state
    const visibleTasks = this.state.machineFilter === ALL ? tasks : filter(tasks, {machine: machineFilter})
    const tasksStatus = map(visibleTasks, (item) => ({status: item.status, name: item.name}))
    return (
      <Segment attached>
        <Grid divided stackable>
          <Grid.Column width={12}>
            <TasksList tasks={visibleTasks}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <TasksStatus tasksStatus={tasksStatus}/>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
