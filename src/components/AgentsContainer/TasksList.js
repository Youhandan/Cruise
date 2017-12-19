import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import { map } from 'lodash'
import TaskItem from './TaskItem'

export default class TasksList extends React.Component {
  static propTypes = {
    agents: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const agentItems = map(this.props.agents, (agent, index) => <TaskItem key={index} agent={agent}/>)
    return (
      <Item.Group>{agentItems}</Item.Group>
    )
  }
}
