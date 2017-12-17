import React from 'react'
import { Segment, Header, Button, Container, Grid } from 'semantic-ui-react'
import { map } from 'lodash'
import TasksList from './TasksList'
import TasksStatus from './TasksStatus'

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
    const tasksStatus = map(data, (item) => ({status: item.status, name: item.name}))
    return (
      <Container fluid>
        <Segment inverted color='grey' vertical>
          <Header as='h3' floated='left'>Agents</Header>
          <Button.Group>
            <Button inverted color='grey'>All</Button>
            <Button.Or />
            <Button inverted color='grey'>Physical</Button>
            <Button.Or />
            <Button inverted color='grey'>Virtual</Button>
          </Button.Group>
        </Segment>
        <Segment vertical>
          <Grid divided>
            <Grid.Column width={12}>
              <TasksList tasks={data}/>
            </Grid.Column>
            <Grid.Column width={4}>
              <TasksStatus tasksStatus={tasksStatus}/>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    )
  }
}
