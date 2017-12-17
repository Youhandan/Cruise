import React from 'react'
import { Segment, Item, Icon, List, Label } from 'semantic-ui-react'
import { map } from 'lodash'
import './TaskItem.less'
const ItemData = {
  name: 'bjstdmngbgr02.thoughtworks.com',
  info: {
    status: 'idle',
    ip: '192.168.1.2',
    path: 'var/lib/cruise-agent'
  },
  resources: ['ubuntu', 'firefox3', 'core-duo']
}

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment inverted color='green' style={{width: '100%'}} className='task-item'>
        <Icon size='huge' name='circle' className='item-icon'/>
        <Item.Content className='item-content'>
          <Item.Header as='h4' className='item-header'>
            {ItemData.name}
            {this.renderInfo()}
          </Item.Header>
          <Item.Description>
            {this.renderResources()}
            {ItemData.info.status === 'idle' && this.renderDeny()}
          </Item.Description>
        </Item.Content>
      </Segment>
    )
  }

  renderInfo() {
    return (
      <List divided horizontal className='item-info'>
        <List.Item>{ItemData.info.status}</List.Item>
        <List.Item>{ItemData.info.ip}</List.Item>
        <List.Item>{ItemData.info.path}</List.Item>
      </List>
    )
  }

  renderResources() {
    return (
      <List divided horizontal className='item-resource'>
        <List.Item>{this.renderAddResource()}</List.Item>
        <List.Item>{this.renderResourceLabels()}</List.Item>
      </List>
    )
  }

  renderAddResource() {
    return (
      <span>
        <Icon name='plus'/>
        <a>Specify Resources</a>
      </span>
    )
  }

  renderResourceLabels() {
    const resources = map(ItemData.resources, (resource) => this.renderResourceLabel(resource))
    return (
      <span>Resources：{resources}</span>
    )
  }

  renderResourceLabel(resourceName) {
    return (
      <Label key={resourceName} className='resource-label'>
        {resourceName}
        <Icon name='delete' />
      </Label>
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
