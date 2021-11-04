import styled from "styled-components";

export const LogoBanner = styled.div`
    margin-top: 10px;
        img{
            width: 20%;
        }
    @media only screen and (max-width: 767px) {
        img{
            width: 40%;
        }
      }

    `
    

const RegisterWrapper = styled.div`
.main-container {
    margin-top: 50px;
}
.main{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
}
.main img{
    width: 100%;
}

.sub-main{
    width: 60%;
   margin: 0 auto;
   padding: 0 20px;
}
.sub-main .username{
    padding-top: 3.75rem;
}
.sub-main .username, .sub-main .password{
    margin: 20px 0;
}
.sub-main .heading{
    display: flex;
    justify-content: space-between;
}
.sub-main .heading .sign-in {
    text-decoration: none;
    color: black;
}
.sub-main .heading .sign-in-line {
    width: 100%;
    background-color: rgb(255, 72, 88);
    height: 3px;
}

.sub-main .heading .register > a{
    text-decoration: none;
    color: black;
}
.sub-main .username > label{
    margin-bottom: 20px;
    font-weight: 400;
    color:rgb(34, 38, 42);
    font-size: 14px;
}
.sub-main .password .password-eye > label{
    padding-bottom: -10px;
    font-weight: 400;
    color:rgb(34, 38, 42);
    font-size: 14px;
}

.sub-main .password .password-eye {
    display: flex;
    justify-content: space-between;
}
.fas {
    color: dodgerblue;
    font-size: 12px;
}

.sub-main .bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.sub-main .bottom .vendor{
    text-decoration: none;
    color: black;
}

.sub-main .bottom .forgot-password > a{
    text-decoration: none;
    color: black;
}

@media only screen and (max-width: 767px) {
    .main{
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 10px;
    }
    .main img{
        display: none;
    }
    .sub-main{
        width: 100%;
        margin-left: -20px;
    }
  }

.sub-main .heading .register-in-line {
    width: 100%;
    background-color: rgb(255, 72, 88);
    height: 3px;
}

.sub-main .first-name{
    padding-top: 1.00rem;
}
.sub-main .first-name > label, .sub-main .last-name > label,
.sub-main .username-two > label, .sub-main .email > label,
.sub-main .password > label
{
    margin-bottom: 20px;
    font-weight: 400;
    color:rgb(34, 38, 42);
    font-size: 14px;
}
.sub-main .first-name, .sub-main .last-name,
.sub-main .username-two, .sub-main .email {
    margin: 20px 0;
}

input[type=text], input[type=password], input[type=submit]{
    margin-top: 10px;
    padding: 15px 10px;
    padding-top: 15px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 2px solid rgb(241, 243, 244);
}
input[type=submit]{
    background-color: rgb(255, 72, 88);
    color: white;
    border:none;
    padding: 18px;
    font-size: 1rem;
    cursor: pointer;
}
input[type=text], input[type=password], input[type=submit], input[type=email]{
    margin-top: 10px;
    padding: 15px 10px;
    padding-top: 15px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 2px solid rgb(241, 243, 244);
}
input[type=submit]{
    background-color: rgb(255, 72, 88);
    color: white;
    border:none;
    padding: 18px;
    font-size: 1rem;
    cursor: pointer;
}

`;

export default RegisterWrapper;
