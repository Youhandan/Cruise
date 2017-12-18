import React from 'react'
import { map } from 'lodash'
import { Button } from 'semantic-ui-react'


export const EllipseButtonGroup = ({buttons}) => {
  const buttonItems = map(buttons, (button, index) => {
    return (
      <Button
        key={index}
        inverted
        color='grey'
        style={{marginRight: '2rem', borderRadius: '2rem'}}
      >
        {button}
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
