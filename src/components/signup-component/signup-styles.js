import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const Container = styled.div`
   position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 70%;
    border: 1px solid #d8d8d8;

`

export const SignupForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-right: 10px;
`

export const SocialSignup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-image: url('../../img/home1.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  background-size: cover;
  position: relative;
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #69eed3;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  filter: alpha(opacity=50);
`

export const SocialButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`