// Write your code here

import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoFunc = () => {
    this.setState(previousState => ({mangoCount: previousState.mangoCount + 1}))
  }

  bananaFunc = () => {
    this.setState(previousState => ({
      bananaCount: previousState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-con">
        <div className="cg-con">
          <h1 className="head">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="img-con">
            <div className="mango-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />

              <button onClick={this.mangoFunc} className="but" type="button">
                Eat Mango
              </button>
            </div>
            <div className="mango-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.bananaFunc} type="button" className="but">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
