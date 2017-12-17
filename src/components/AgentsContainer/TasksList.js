import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import { map } from 'lodash'
import TaskItem from './TaskItem'

export default class TasksList extends React.Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const taskItems = map(this.props.tasks, (task, index) => <TaskItem key={index} task={task}/>)
    return (
      <Item.Group>{taskItems}</Item.Group>
    )
  }
}
