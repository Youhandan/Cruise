import React from 'react'
import { Header, List } from 'semantic-ui-react'

export default class TasksStatus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const items = new Array(10).fill('bjstdmngbgr02/Acceptance_test')
    return (
      <div>
        <Header as='h3' dividing >Summary</Header>
          <p>building 2</p>
          <p>idle 2</p>
        <Header as='h3' dividing>History</Header>
          <List items={items}/>
      </div>
    )
  }
}
