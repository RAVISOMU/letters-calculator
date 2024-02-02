import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {userInput: 0}

  onUserEnters = () => {
    this.setState(prevState => ({userInput: prevState.userInput + 1}))
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="letters-calculators-bg-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-image"
          />
        </div>
        <div className="description-container">
          <h1 className="description">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="label" htmlFor="searchInput">
              Enter the phrase
            </label>
            <input
              onChange={this.onUserEnters}
              id="searchInput"
              type="text"
              className="search-input"
            />
          </div>
          <p className="letters-display">No.of letters: {userInput}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
