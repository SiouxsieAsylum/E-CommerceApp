import React, { Component } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/form-input'
import './sign-in.scss';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }  

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({email: '', password: ''})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        required
                        id="email"
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        />
                    <FormInput 
                        required
                        id="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        name="password" 
                        type="password" 
                        label="password"
                        />
                    {/* <Button 
                        text="SUBMIT"
                        type="submit"
                        handleClick={this.handleSubmit}
                        /> */}
                    
                    
                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

export default SignIn;