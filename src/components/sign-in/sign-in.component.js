import React from "react";
// import './form-input.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../firebase/firebase-utils'
import FormInput from "../form-input/from-input.component";
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    HandleSubmit = () => (
        this.setState({ email: '', password: '' })
    )

    HandleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.HandleSubmit}>
                    <FormInput 
                    HandleChange={this.HandleChange}
                     name='email' type='email'
                      value={this.state.email}
                      label='Email'
                       required />
                    <FormInput
                     HandleChange={this.HandleChange} 
                     name='password' 
                     type='password' 
                     value={this.state.password} 
                     label="password"
                     required />
                      <CustomButton type='submit'>SIGN IN</CustomButton>               
                      <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>SIGN IN with Google</CustomButton>               
                </form>
            </div>
        )
    }
}


export default SignIn