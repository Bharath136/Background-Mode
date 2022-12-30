import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  changeMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getMode = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'light-mode' : 'dark-mode'
  }

  getText = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const mode = this.getMode()
    const text = this.getText()
    return (
      <div className="container">
        <div className={mode}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
