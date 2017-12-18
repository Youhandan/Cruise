import React from 'react'
import PropTypes from 'prop-types'
import { Header, List, Grid } from 'semantic-ui-react'
import { partition, size, map, groupBy } from 'lodash'

const items = new Array(10).fill('bjstdmngbgr02/Acceptance_test')

export default class TasksStatus extends React.Component {
  static propTypes = {
    tasksStatus: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const taskHistoryListItems = map(items, (item, key) => <List.Item key={key}>{item}</List.Item>)
    const tasksStatusCategories = groupBy(this.props.tasksStatus, 'status')
    const taskStatusListItems = map(tasksStatusCategories, (tasks, key) => {
      return (
        <List.Item key={key}>
          <Grid columns={2}>
            <Grid.Column>
              {key}
            </Grid.Column>
            <Grid.Column>
              {size(tasks)}
            </Grid.Column>
          </Grid>
        </List.Item>
      )
    })
    return (
      <div>
        <Header as='h3' dividing >Summary</Header>
        <List>{taskStatusListItems}</List>
        <Header as='h3' dividing>History</Header>
        <List>{taskHistoryListItems}</List>
      </div>
    )
  }
}
