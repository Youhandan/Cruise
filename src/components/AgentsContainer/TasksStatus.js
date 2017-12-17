import React from 'react'
import PropTypes from 'prop-types'
import { Header, List } from 'semantic-ui-react'
import { partition, size, map } from 'lodash'

const items = new Array(10).fill('bjstdmngbgr02/Acceptance_test')

export default class TasksStatus extends React.Component {
  static propTypes = {
    tasksStatus: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const listItem = map(items, (item, key) => <List.Item key={key}>{item}</List.Item>)
    const groupedByStatusTasks = partition(this.props.tasksStatus, {status: 'building'})
    const buildingTasks = size(groupedByStatusTasks[0])
    const idleTasks = size(groupedByStatusTasks[1])
    return (
      <div>
        <Header as='h3' dividing >Summary</Header>
          <p>building {buildingTasks}</p>
          <p>idle {idleTasks}</p>
        <Header as='h3' dividing>History</Header>
          <List>{listItem}</List>
      </div>
    )
  }
}
