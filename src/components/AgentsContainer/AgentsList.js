import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import { map } from 'lodash'
import AgentItem from './AgentItem'

export default class AgentsList extends React.Component {
  static propTypes = {
    agents: PropTypes.array.isRequired,
    onUpdateAgentResourcesById: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const agentItems = map(this.props.agents, (agent) => (
      <AgentItem
        key={agent.id}
        agent={agent}
        onUpdateAgentResourcesById={this.props.onUpdateAgentResourcesById}
      />
    ))
    return (
      <Item.Group>{agentItems}</Item.Group>
    )
  }
}
