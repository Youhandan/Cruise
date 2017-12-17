import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Item, Icon, List, Label } from 'semantic-ui-react'
import { map } from 'lodash'
import './TaskItem.less'

export default class TaskItem extends React.Component {
  static propTypes = {
    task: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }

  render() {
    const { name, status } = this.props.task
    return (
      <Item>
        <Segment inverted color='green' style={{width: '100%'}} className='task-item'>
          <Icon size='huge' name='circle' className='item-icon'/>
          <Item.Content className='item-content'>
            <Item.Header as='h4' className='item-header'>
              {name}
              {this.renderInfo()}
            </Item.Header>
            <Item.Description>
              {this.renderResources()}
              {status === 'idle' && this.renderDeny()}
            </Item.Description>
          </Item.Content>
        </Segment>
      </Item>
    )
  }

  renderInfo() {
    const { status, ip, path } = this.props.task
    return (
      <List divided horizontal className='item-info'>
        <List.Item>{status}</List.Item>
        <List.Item>{ip}</List.Item>
        <List.Item>{path}</List.Item>
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
    const resources = map(this.props.task.resources, (resource, index) => this.renderResourceLabel(resource, index))
    return (
      <span>Resources：{resources}</span>
    )
  }

  renderResourceLabel(resourceName, index) {
    return (
      <Label key={index} className='resource-label'>
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
