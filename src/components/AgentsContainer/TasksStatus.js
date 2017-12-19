import React from 'react'
import PropTypes from 'prop-types'
import { Header, List, Grid } from 'semantic-ui-react'
import { size, map, groupBy } from 'lodash'

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
    const taskStatusListItems = map(tasksStatusCategories, (agents, key) => {
      return (
        <List.Item key={key}>
          <Grid columns={2}>
            <Grid.Column>
              {key}
            </Grid.Column>
            <Grid.Column>
              {size(agents)}
            </Grid.Column>
          </Grid>
        </List.Item>
      )
    })
    return (
      <div>
        <Header as='h3' dividing >Summary</Header>
        <List verticalAlign='middle' relaxed>{taskStatusListItems}</List>
        <Header as='h3' dividing>History</Header>
        <List verticalAlign='middle' relaxed>{taskHistoryListItems}</List>
      </div>
    )
  }
}
