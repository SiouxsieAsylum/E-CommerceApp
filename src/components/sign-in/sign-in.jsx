import React, { Component } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/form-input'
import { signInWithGoogle } from '../../firebase/firebaseUtils'
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
        this.setState({email: '', password: ''})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        // required
                        id="email"
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        />
                    <FormInput 
                        // required
                        id="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        name="password" 
                        type="password" 
                        label="password"
                        />
                    <div className="button-container">
                        <Button 
                            type="submit" >
                            Sign In </Button>
                        <Button 
                            googleOAuth
                            onClick={ signInWithGoogle } >
                            Sign In With Google </Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;