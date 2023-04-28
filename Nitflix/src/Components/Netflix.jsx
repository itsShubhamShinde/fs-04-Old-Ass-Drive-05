import { Component } from 'react'
import './Style.css'
class Netflix extends Component {
  render() {
    return <div className='main'>
      <div className='secondmain'>
        <div className='imgwala'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            width="150"
            height="50"
          />
        </div>
        <div className='buttonwala'>

          <button className='same'>Sign In</button>&nbsp;&nbsp;&nbsp;
          <button className='same'>Register</button>
        </div>
      </div>

      <div className='lower'>
        <h1>Unlimited movies, TV shows and more.</h1>
        <p className='contentsame'>Watch anywhere. Cancel anytime.</p>
        <p className='content'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
    </div>
  }
}
export default Netflix;