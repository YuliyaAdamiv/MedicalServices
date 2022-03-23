import React, { Component } from 'react'

import cn from 'classnames'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'


import {connect} from 'react-redux'

import './Header.scss'

function mapStateToProps (state) {
    return state
}

class Header extends Component {
  componentDidMount(){
    window.gapi.load('auth2', function () {
        window.gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        }).then(()=> console.log('init ok'), ()=>console.log('init err'))
    })
}
signIn=()=>{
   const GoogleAuth=window.gapi.auth2.getAuthInstance()
   GoogleAuth.signIn()
}
  render () {
    const {
      title,
      userName,
      className,
      bodyClassName,
      renderIcon
    } = this.props
    
    return (
      <div className={cn('Header', className)}>
        <div className={cn('Header-Body', bodyClassName)}>
          <div className='flex-1 d-flex flex-row justify-content-start align-items-center'>
            {renderIcon && renderIcon()}
            <div className='Header-Title'>
              {title}
            </div>
          </div>
          <div className='flex-1 d-flex flex-row justify-content-end align-items-center'>
            {userName && (
              <div className='Header-UserName'>
                {userName}
              </div>
            )}
              <Link className='Header-UserLogin' to='/login'>LogIn</Link>
            <Button className="btn-primary" onClick={this.signIn}>Log In </Button>
            <a className='btn btn-primary Header-ExitBtn'>
            Go out
            </a>
          </div>
        </div>        
      </div>
    )
  }
}

export default connect(null, null)(Header)