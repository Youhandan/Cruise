import React from 'react'
import ReactDom from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './utils.less'
import Cruise from './Cruise'

ReactDom.render(
  <Cruise />,
  document.getElementById('app')
)
