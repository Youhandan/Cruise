import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Item, Icon, List } from 'semantic-ui-react'
import TaskItemResources from './TaskItemResources'
import './TaskItem.less'

export default class TaskItem extends React.Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
  }

  render() {
    const { name, status, resources } = this.props.task
    const itemColor = status === 'idle' ? 'green' : 'yellow'
    return (
      <Item>
        <Segment inverted color={itemColor} className='item-segment'>
          <Icon size='huge' name='circle' className='item-icon'/>
          <Item.Content className='item-content'>
            <Item.Header as='h4' className='item-header'>
              {name}
              {this.renderInfo()}
            </Item.Header>
            <Item.Description>
              <TaskItemResources resources={resources}/>
            </Item.Description>
          </Item.Content>
          {status === 'idle' && this.renderDeny()}
        </Segment>
      </Item>
    )
  }

  renderInfo() {
    const { status, ip, path } = this.props.task
    const items = [status.valueOf(), ip.valueOf(), path.valueOf()]
    return (
      <List
        divided
        horizontal
        className='item-info'
        items={items}
      />
    )
  }

  renderDeny() {
    return (
      <div className='item-deny'>
        <Icon name='ban'/>
        <a>Deny</a>
      </div>
    )
  }
}
