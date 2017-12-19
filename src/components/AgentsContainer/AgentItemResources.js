import React from 'react'
import PropTypes from 'prop-types'
import { List, Label } from 'semantic-ui-react'
import { map, filter } from 'lodash'
import ResourceAddition from './ResourceAddition'

export default class AgentItemResources extends React.Component {
  static propTypes = {
    resources: PropTypes.array.isRequired,
    onUpdateResources: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      isOpenAddResourcePopUp: false
    }
  }

  handleRemoveResource = (e, data) => {
    const { content } = data
    const remainResource = filter(this.props.resources, (resource) => resource !== content)
    this.props.onUpdateResources(remainResource)
  }

  handleAddResource = (newResources) => {
    this.props.onUpdateResources([...this.props.resources, ...newResources])
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
    const resources = map(this.props.resources, (resource, index) => (
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
