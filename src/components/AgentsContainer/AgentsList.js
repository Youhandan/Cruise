import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import { map } from 'lodash'
import AgentItem from './AgentItem'

export default class AgentsList extends React.Component {
  static propTypes = {
    agents: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const agentItems = map(this.props.agents, (agent, index) => <AgentItem key={index} agent={agent}/>)
    return (
      <Item.Group>{agentItems}</Item.Group>
    )
  }
}
