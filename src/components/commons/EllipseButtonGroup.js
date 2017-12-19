import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import { Button } from 'semantic-ui-react'

export const EllipseButtonGroup = ({buttonNames, onClick, activeButtonName}) => {
  const buttonItems = map(buttonNames, (buttonName, index) => {
    return (
      <Button
        key={index}
        inverted
        color='grey'
        style={{marginRight: '2rem', borderRadius: '2rem'}}
        onClick={onClick(buttonName)}
        active={activeButtonName === buttonName}
      >
        {buttonName}
      </Button>
    )
  })
  return (
    <div>
      <Button.Group>
        {buttonItems}
      </Button.Group>
    </div>
  )
}

EllipseButtonGroup.propTypes = {
  buttonNames: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  activeButtonName: PropTypes.string.isRequired,
}
