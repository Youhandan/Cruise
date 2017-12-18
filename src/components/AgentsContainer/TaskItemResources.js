import React from 'react'
import PropTypes from 'prop-types'
import { Icon, List, Label, Input, Button, Popup, Form } from 'semantic-ui-react'
import { map, filter, split } from 'lodash'
import ResourceAddition from './ResourceAddition'

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

  handleAddResource = (newResources) => {
    this.setState({
      resources: [...this.state.resources, ...newResources]
    })
  }

  render() {
    return (
      <List divided horizontal className='item-resource'>
        <List.Item><ResourceAddition onAdd={this.handleAddResource}/></List.Item>
        <List.Item>{this.renderResourceItems()}</List.Item>
      </List>
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
      <div>Resources：{resources}</div>
    )
  }
}
