import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Input, Button, Popup, Form } from 'semantic-ui-react'
import { map, filter, split } from 'lodash'

export default class ResourceAddition extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      isOpenAddResourcePopUp: false
    }
  }

  handleAdd = () => {
    const inputValue = this.refs.resources.inputRef.value
    const resources = split(inputValue, ',')
    this.setState({
      isOpenAddResourcePopUp: false
    })

    this.props.onAdd(resources)
  }

  handleTogglePopup = () => {
    this.setState({
      isOpenAddResourcePopUp: !this.state.isOpenAddResourcePopUp
    })
  }

  render() {
    return (
      <div>
        <Icon name='plus'/>
        <Popup
          style={{width: '200rem'}}
          open={this.state.isOpenAddResourcePopUp}
          onClose={this.handleTogglePopup}
          onOpen={this.handleTogglePopup}
          wide='very'
          position='bottom left'
          trigger={<a>Specify Resources</a>}
          content={this.renderAddResourcesPopUp()}
          on='click'
        />
      </div>
    )
  }

  renderAddResourcesPopUp() {
    return (
      <Form>
        <Form.Field>
          <label>(separate multiple resources name with commas)</label>
          <Input ref='resources'/>
        </Form.Field>
        <Button positive onClick={this.handleAdd}>Add Resources</Button>
        <Button negative onClick={this.handleTogglePopup}>Cancel</Button>
      </Form>
    )
  }
}
