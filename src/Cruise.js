import React from 'react'
import { Tab, Header, Container, Icon } from 'semantic-ui-react'
import AgentsContainer from 'components/AgentsContainer/AgentsContainer.js'
import './Cruise.less'

export default class Cruise extends React.Component {

  constructor(props) {
    super(props)
  }

  getPanes () {
    return [
      { menuItem: 'DASHBOARD', pane: {key: 'dashboard', content: ''} },
      { menuItem: 'MY CRUISE', pane: {key: 'myCruise', content: ''} },
      { menuItem: 'AGENTS', pane: {key: 'agents', content: this.renderAgents()} },
      { menuItem: 'HELP', pane: {key: 'help', content: ''} }
    ]
  }

  render() {
    return (
      <Container fluid className='layout'>
        {this.renderLogInInfo()}
        {this.renderTab()}
      </Container>
    )
  }

  renderLogInInfo() {
    return (
      <Header as='h5' floated='right'>
        <span style={{marginRight: '2rem'}}>Signed in as <a>Member</a></span>
        <span><Icon link name='arrow right'/><a>Sign out</a></span>
      </Header>
    )
  }

  renderTab() {
    const panes = this.getPanes()
    return (
      <div className='tab-container'>
        <Header as='h1' className='title-header'>Cruise</Header>
        <Tab panes={panes} renderActiveOnly={false} className='right-tab' defaultActiveIndex={2}/>
      </div>
    )
  }

  renderAgents() {
    return (
      <AgentsContainer/>
    )
  }
}
