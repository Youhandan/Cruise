import React from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'
import { map } from 'lodash'
import TasksList from './TasksList'
import TasksStatus from './TasksStatus'
import {EllipseButtonGroup} from 'components/commons/EllipseButtonGroup'

const data = [
    {
      name: 'bjstdmngbgr02.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.2',
      path: 'var/lib/cruise-agent',
      resources: ['ubuntu', 'firefox3', 'core-duo']
    },
    {
      name: 'bjstdmngbgr03.thoughtworks.com',
      status: 'building',
      ip: '192.168.1.3',
      path: 'var/lib/cruise-agent',
      resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
    },
    {
      name: 'bjstdmngbgr04.thoughtworks.com',
      status: 'building',
      ip: '192.168.1.4',
      path: 'var/lib/cruise-agent',
      resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
    },
    {
      name: 'bjstdmngbgr05.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.5',
      path: 'var/lib/cruise-agent',
      resources: ['ubuntu']
    },

]

export default class AgentsContainer extends React.Component {

  constructor(props) {
    super(props)
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
            <Header as='h2' inverted color='grey'>Agents</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <EllipseButtonGroup buttons={['All', 'Physical', 'Virtual']}/>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }

  renderContent() {
    const tasksStatus = map(data, (item) => ({status: item.status, name: item.name}))
    return (
      <Segment attached>
        <Grid divided stackable>
          <Grid.Column width={12}>
            <TasksList tasks={data}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <TasksStatus tasksStatus={tasksStatus}/>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
