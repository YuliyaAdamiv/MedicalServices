import React, { Component }from "react";
import {Link} from 'react-router-dom'
import Header from '../../containers/Header/Header'



const TITLE = 'Login'

const USER = 'Иванов Иван Иванович'
export default class Loginout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem('token')
    }
    render(){
        return (
            <div>
                <Header
          title={TITLE}
          userName={USER}
          className='Appointments-Header'
          bodyClassName='Appointments-HeaderBody'
          
        />
                <h1>You have been logged out!!!!</h1>
                <Link to='/login'>Login Again</Link>
            </div>
        )
    }
}