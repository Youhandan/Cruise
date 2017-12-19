import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Item, Icon, List } from 'semantic-ui-react'
import AgentItemResources from './AgentItemResources'
import { statusColor, IDLE } from 'constants/AgentsConstants'
import './AgentItem.less'

export default class AgentItem extends React.Component {
  static propTypes = {
    agent: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
  }

  render() {
    const { name, status, resources } = this.props.agent
    return (
      <Item>
        <Segment inverted color={statusColor[status]} className='item-segment'>
          <Icon size='huge' name='circle' className='item-icon'/>
          <Item.Content className='item-content'>
            <Item.Header as='h4' className='item-header'>
              <List horizontal>
                <List.Item>{name}</List.Item>
                <List.Item>{this.renderInfo()}</List.Item>
              </List>
            </Item.Header>
            <Item.Description>
              <AgentItemResources resources={resources}/>
            </Item.Description>
          </Item.Content>
          {status === IDLE && this.renderDeny()}
        </Segment>
      </Item>
    )
  }

  renderInfo() {
    const { status, ip, sandbox } = this.props.agent
    const items = [status.valueOf(), ip.valueOf(), sandbox.valueOf()]
    return (
      <List
        divided
        horizontal
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
