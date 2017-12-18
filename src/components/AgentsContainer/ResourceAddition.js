import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Input, Button, Popup, Form, Message } from 'semantic-ui-react'
import { split, isEmpty } from 'lodash'
import { validateAddResource } from 'validations/addResourceValidator'

export default class ResourceAddition extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      isOpenAddResourcePopUp: false,
      errorMessage: ''
    }
  }

  handleAdd = () => {
    const inputValue = this.refs.resources.inputRef.value
    const resources = split(inputValue, ',')
    const { hasError, message } = validateAddResource(resources)
    if (hasError) {
      return this.setState({
        errorMessage: message
      })
    }

    this.setState({
      isOpenAddResourcePopUp: false
    })

    this.props.onAdd(resources)
  }

  handleTogglePopup = () => {
    this.setState({
      isOpenAddResourcePopUp: !this.state.isOpenAddResourcePopUp,
      errorMessage: ''
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
    const error = !isEmpty(this.state.errorMessage)
    return (
      <Form error={error}>
        <Form.Field>
          <label>(separate multiple resources name with commas)</label>
          <Input ref='resources'/>
          <Message
            hidden={!error}
            error={error}
            header='Action Forbidden'
            content={this.state.errorMessage}
          />
        </Form.Field>
        <Button positive onClick={this.handleAdd}>Add Resources</Button>
        <Button negative onClick={this.handleTogglePopup}>Cancel</Button>
      </Form>
    )
  }
}
