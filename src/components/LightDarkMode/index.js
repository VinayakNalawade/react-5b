// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode'}

  change = () => {
    const {mode} = this.state

    if (mode === 'Light Mode') {
      this.setState(() => ({mode: 'Dark Mode'}))
    } else {
      this.setState(() => ({mode: 'Light Mode'}))
    }
  }

  render() {
    const {mode} = this.state

    return (
      <div className="mainContainer">
        <div className={mode === 'Light Mode' ? 'lightCard' : 'darkCard'}>
          <h1
            className={mode === 'Light Mode' ? 'lightHeading' : 'darkHeading'}
          >
            Click To Change Mode
          </h1>
          <button
            type="button"
            onClick={this.change}
            className={mode === 'Light Mode' ? 'lightButton' : 'darkButton'}
          >
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
