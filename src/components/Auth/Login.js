import React, { Component }from "react";
import Header from '../../containers/Header/Header'
import {Redirect} from 'react-router-dom'
import { Button } from "reactstrap";
import './Login.scss'

const TITLE = 'Login'

const USER = 'Ivanov'
const PASSWORD = 'B'
export default class Login extends React.Component {
    constructor(props){
        super(props);
        const token=localStorage.getItem('token')
                let loggedIn=true
                if (token==null) {
                    loggedIn=false
                }
        this.state = {
            username:'',
            password:'',
            loggedIn,
          fields: {},
          errors: {}
        }
      }
    
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
          }      	
        }
    
        //Password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
          }
      
          if(typeof fields["password"] !== "undefined"){
            if(!fields["password"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["password"] = "Only letters";
            }      	
          }
    
    
    
        this.setState({errors: errors});
        return formIsValid;
      }
    
      contactSubmit(e){
        e.preventDefault();
        const {username, password} =this.state
        if (username === USER&&password === PASSWORD) {
            localStorage.setItem('token', "szdxfcgvhjbknlkm;")
            this.setState({
                loggedIn: true
            })
        }
        if(this.handleValidation()){
          alert("Form submitted");
        }else{
          alert("Form has errors.")
        }
    
      }
    
      handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({[e.target.name]: e.target.value});
      }
    
      render(){
        if(this.state.loggedIn){
                        return <Redirect to='/login' />
                    }
        return (
            <div>
                <Header
                      title={TITLE}
                      userName={USER}
                      className='Appointments-Header'
                      bodyClassName='Appointments-HeaderBody'
                    />
         <h1 className="primary">Login Form</h1>
         <br />
          <div>        	
            <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
              <div className="col-md-12">
                <fieldset>
                  <input ref="name" type="text" size="30" placeholder="Enter username" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                  <div className="error">{this.state.errors["name"]}</div>
                  <br/>
                  <input refs="password" type="text" size="30" placeholder="Enter password (only letters)" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                  <div className="error">{this.state.errors["password"]}</div>
                  <br/>
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <Button className="btn btn-lg pro btn-primary" id="submit" value="Submit">Send Message</Button>
                </fieldset>
              </div>
            </form>
          </div>
          </div>
        )
      }
    }

