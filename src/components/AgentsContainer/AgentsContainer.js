import React from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'
import { map, filter } from 'lodash'
import TasksList from './TasksList'
import TasksStatus from './TasksStatus'
import {EllipseButtonGroup} from 'components/commons/EllipseButtonGroup'
import './AgentsContainer.less'

const data = [
    {
      name: 'bjstdmngbgr02.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.2',
      sandbox: 'var/lib/cruise-agent',
      machine: 'Physical',
      resources: ['ubuntu', 'firefox3', 'core-duo']
    },
    {
      name: 'bjstdmngbgr03.thoughtworks.com',
      status: 'building',
      ip: '192.168.1.3',
      sandbox: 'var/lib/cruise-agent',
      machine: 'Physical',
      resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
    },
    {
      name: 'bjstdmngbgr04.thoughtworks.com',
      status: 'building',
      ip: '192.168.1.4',
      sandbox: 'var/lib/cruise-agent',
      machine: 'Physical',
      resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
    },
    {
      name: 'bjstdmngbgr05.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.5',
      sandbox: 'var/lib/cruise-agent',
      machine: 'Physical',
      resources: ['ubuntu']
    },

]

export default class AgentsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: data,
      machineFilter: 'All'
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
              buttonNames={['All', 'Physical', 'Virtual']}
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
    const visibleTasks = this.state.machineFilter === 'All' ? tasks : filter(tasks, {machine: machineFilter})
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
