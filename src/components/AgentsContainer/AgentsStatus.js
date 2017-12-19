import React from 'react'
import PropTypes from 'prop-types'
import { Header, List, Grid } from 'semantic-ui-react'
import { size, map, groupBy } from 'lodash'
import { histories } from 'constants/mockData'

export default class AgentsStatus extends React.Component {
  static propTypes = {
    agentsStatus: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const agentHistoryListItems = map(histories, (item, key) => <List.Item key={key}>{item}</List.Item>)
    const agentsStatusCategories = groupBy(this.props.agentsStatus, 'status')
    const agentStatusListItems = map(agentsStatusCategories, (agents, key) => {
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
        <List verticalAlign='middle' relaxed>{agentStatusListItems}</List>
        <Header as='h3' dividing>History</Header>
        <List verticalAlign='middle' relaxed>{agentHistoryListItems}</List>
      </div>
    )
  }
}
