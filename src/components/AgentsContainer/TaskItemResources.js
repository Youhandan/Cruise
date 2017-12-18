import React from 'react'
import PropTypes from 'prop-types'
import { Icon, List, Label, Input, Button, Popup } from 'semantic-ui-react'
import { map, filter, split } from 'lodash'

export default class TaskItemResources extends React.Component {
  static propTypes = {
    resources: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      resources: props.resources,
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

  handleTogglePopUp = () => {
    this.setState({
      isOpenAddResourcePopUp: !this.state.isOpenAddResourcePopUp
    })
  }

  render() {
    return (
      <List divided horizontal className='item-resource'>
        <List.Item>{this.renderAddResource()}</List.Item>
        <List.Item>{this.renderResourceItems()}</List.Item>
      </List>
    )
  }

  renderAddResource() {
    return (
      <span>
        <Icon name='plus'/>
        <Popup
          open={this.state.isOpenAddResourcePopUp}
          onClose={this.handleTogglePopUp}
          onOpen={this.handleTogglePopUp}
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
          <Button negative onClick={this.handleTogglePopUp}>Cancel</Button>
        </span>
      </div>
    )
  }

  renderResourceItems() {
    const resources = map(this.state.resources, (resource, index) => (
      <Label
        key={index}
        content={resource}
        className='item-resource-label'
        removeIcon='delete'
        onRemove={this.handleRemoveResource}
      />
    ))
    return (
      <span>Resources：{resources}</span>
    )
  }
}
