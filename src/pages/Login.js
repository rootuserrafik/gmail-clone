import React from 'react'
import LoginFooter from '../components/LoginFooter'
import styled from 'styled-components';
import Logosrc from './../assets/img/google.png';
import ErrorIcon from '@mui/icons-material/Error';

const Container = styled.div`
    /* background-color: aliceblue; */
    width: 450px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Wrapper = styled.div`
    border: 1px solid #DADCE0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 40px;
`
const GoogleLogo = styled.img`
    height: 30px;
`
const Heading = styled.h1`
    font-size: 24px;
    font-weight: 400;
    color: #202124;
    line-height: 1.333;
    padding-top: 16px;
`
const Para = styled.p`
    color: #202124;
    font-size: 16px;
    margin-top: 5px;
    line-height: 1.5;
    letter-spacing: 0.1px;
`
const Form = styled.form`
    padding: 25px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`
const EmailOrPhone = styled.input`
    padding: 15px 10px;
    transition: 0.5s;
    font-size: 16px;
    outline: none;
    border: 1px solid #DADCE0;
    border-radius: 5px;
    &:focus{
        border: 1px solid #1A73E8;
    }
`
const InputAlt = styled.span`
    color: red;
    font-size: small;
    margin-top: 2px;
    display: flex;
`
const ForgotEmail = styled.button`
    color: #1A73E8;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    display: inline-block;
    padding: 10px 0;
    font-weight: bold;
`
const ActionBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    & button{
        cursor: pointer;
        outline: none;
        border: none;
        font-size: .875rem;
        font-weight: bold;
        transition: 0.5s;
        border-radius: 5px;
    }
`
const CreateAccountBtn = styled.button`
    padding: 5px 10px;
    margin-left: -10px;
    background-color: transparent;
    color: #1a73e8;
    &:hover{
        background-color: #F6F9FE;
        color: #1950A7;
    }
`
const NextBtn = styled.button`
    padding: 10px 20px;
    background-color: #1a73e8;
    color: #fff;
    &:hover{
        background-color: #1B66C9;
    }
`
const LearnMoreText = styled.div`
    color: #5f6368;
`
const LearnMoreAction = styled.a`
    text-decoration: none;
    font-weight: 500;
`


function Login() {
  return (
    <Container>
        <Wrapper>
            <GoogleLogo src={Logosrc} alt="Google Logo" />
            <Heading>Sign in</Heading>
            <Para>to continue to Gmail</Para>
            <Form method='post'>
                <EmailOrPhone aria-label="Email or phone" type="email" spellcheck="false" placeholder='Email or phone' />
                {/* <InputAlt><ErrorIcon sx={{ fontSize: 15 }}/>Enter an email or phone number</InputAlt> */}
                <ForgotEmail type='button'>Forgot email?</ForgotEmail>
            </Form>
            <LearnMoreText>
                Not your computer? Use Guest mode to sign in privately. <br />
                <LearnMoreAction href='https://support.google.com/chrome/answer/6130773?hl=en-US'>Learn more</LearnMoreAction>
            </LearnMoreText>  
            <ActionBtnWrapper>
                <CreateAccountBtn>Create Account</CreateAccountBtn>
                <NextBtn>Next</NextBtn>
            </ActionBtnWrapper>
        </Wrapper>
        <LoginFooter />
    </Container>
  )
}

export default Login