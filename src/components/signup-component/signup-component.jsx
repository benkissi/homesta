import React, { useState } from 'react'
import { connect } from 'react-redux'

import { googleSignInStart, signUpStart } from '../../redux/user/user-actions'

import Input from '../../components/Input-component/input-component'
import Button from '../../components/button-component/button-component'
import { Wrapper, SignupForm, SocialSignup, Container, Cover, SocialButtons } from './signup-styles'

const Signup = ({ googleSignInStart, signUpStart }) => {
    const [state, setAppState] = useState({ displayName: '', email: '', password: '' })

    const handleSignup = () => {
        console.log('signup', state)
        signUpStart(state)
    }

    const handleChange = (e) => {
        e.preventDefault()

        setAppState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Wrapper>
            <h3>Sign up</h3>
            <Container>

                <SignupForm>
                    <Input
                        onChange={(e) => handleChange(e)}
                        value={state.name}
                        name="displayName"
                        type="text"
                        width="80%"
                        placeholder="Your Name"
                    />
                    <Input
                        onChange={(e) => handleChange(e)}
                        value={state.email}
                        name="email"
                        type="email"
                        width="80%"
                        placeholder="email"
                    />
                    <Input
                        onChange={handleChange}
                        value={state.password}
                        name="password"
                        type="password"
                        width="80%"
                        placeholder="password"
                    />
                    <Button
                        width="80%"
                        onClick={handleSignup}
                        text="Sign Up"
                    />
                </SignupForm>
                <SocialSignup>
                    <Cover></Cover>
                    <SocialButtons>
                        <Button bgColor="#3b5998" width="80%" onClick={handleSignup} text="Sign up with Facebook" />
                        <Button bgColor="#0F9D58" width="80%" onClick={googleSignInStart} text="Sign up with Google" />
                        <Button bgColor="#1DA1F2" width="80%" onClick={handleSignup} text="Sign up with Twitter" />
                    </SocialButtons>
                </SocialSignup>
            </Container>

        </Wrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Signup)
