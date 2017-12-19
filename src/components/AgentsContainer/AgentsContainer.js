import React from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'
import { map, filter, findIndex } from 'lodash'
import dotProp from 'dot-prop-immutable'
import AgentsList from './AgentsList'
import AgentsStatus from './AgentsStatus'
import {EllipseButtonGroup} from 'components/commons/EllipseButtonGroup'
import { ALL, PHYSICAL, VIRTUAL } from 'constants/AgentsConstants'
import { mockData } from 'constants/mockData'
import './AgentsContainer.less'

export default class AgentsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      agents: mockData,
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

  handleUpdateAgentResource = (id, resources) => {
    const updateAgentIndex = findIndex(this.state.agents, {id: id})
    const newAgents = dotProp.set(this.state.agents, `${updateAgentIndex}.resources`, resources)
    this.setState({
      agents: newAgents
    })
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
    const { agents, machineFilter} = this.state
    const visibleAgents = this.state.machineFilter === ALL ? agents : filter(agents, {machine: machineFilter})
    const agentsStatus = map(visibleAgents, (item) => ({status: item.status, id: item.id}))
    return (
      <Segment attached>
        <Grid divided stackable>
          <Grid.Column width={12}>
            <AgentsList agents={visibleAgents} onUpdateAgentResourcesById={this.handleUpdateAgentResource}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <AgentsStatus agentsStatus={agentsStatus}/>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
