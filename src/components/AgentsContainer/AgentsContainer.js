import React from 'react'
import { Segment, Header, Button, Container, Grid } from 'semantic-ui-react'
import TasksList from './TasksList'
import TasksStatus from './TasksStatus'

export default class AgentsContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
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
              <TasksList/>
            </Grid.Column>
            <Grid.Column width={4}>
              <TasksStatus/>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    )
  }
}
