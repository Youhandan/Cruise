import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Item, Icon, List, Label, Input, Button, Popup } from 'semantic-ui-react'
import { map, filter, split } from 'lodash'
import './TaskItem.less'

export default class TaskItem extends React.Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      resources: props.task.resources,
      isOpenAddResourcePopUp: false
    }
  }

  handleRemoveResource = (e, data) => {
    const { content } = data
    const remainResource = filter(this.state.resources, (resource) => resource !== content)
    this.setState({
      resources: remainResource
    })
  }

  handleAddResource = () => {
    const inputValue = this.refs.resources.inputRef.value
    const resources = split(inputValue, ',')
    this.setState({
      resources: [...this.state.resources, ...resources],
      isOpenAddResourcePopUp: false
    })
  }

  handleToggleAddResourcePopUp = () => {
    this.setState({
      isOpenAddResourcePopUp: !this.state.isOpenAddResourcePopUp
    })
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
        <Popup
          open={this.state.isOpenAddResourcePopUp}
          onClose={this.handleToggleAddResourcePopUp}
          onOpen={this.handleToggleAddResourcePopUp}
          wide='very'
          position='bottom center'
          trigger={<a>Specify Resources</a>}
          content={this.renderAddResourcesPopUp()}
          on='click'
        />
      </span>
    )
  }

  renderAddResourcesPopUp() {
    return (
      <div>
        <p>(separate multiple resources name with commas)</p>
        <Input fluid ref='resources'/>
        <span>
          <Button positive onClick={this.handleAddResource}>Add Resources</Button>
          <Button negative onClick={this.handleToggleAddResourcePopUp}>Cancel</Button>
        </span>
      </div>
    )
  }

  renderResourceLabels() {
    const resources = map(this.state.resources, (resource, index) => this.renderResourceLabel(resource, index))
    return (
      <span>Resources：{resources}</span>
    )
  }

  renderResourceLabel(resourceName, index) {
    return (
      <Label
        key={index}
        content={resourceName}
        className='resource-label'
        removeIcon='delete'
        onRemove={this.handleRemoveResource}
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
