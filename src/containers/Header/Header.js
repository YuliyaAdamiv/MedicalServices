import React, { Component } from 'react'

import cn from 'classnames'
import {Link} from 'react-router-dom'


import {connect} from 'react-redux'

import './Header.scss'

function mapStateToProps (state) {
    return state
}

class Header extends Component {

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