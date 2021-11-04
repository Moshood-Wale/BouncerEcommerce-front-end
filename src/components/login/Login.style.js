import styled from "styled-components";

export const LoginWrapper = styled.section`
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    max-width: 1000px;
    margin: 30px auto;

    .login-head{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 60px;
       
    }
    .home-btn img{
         
            margin-top: 10px;
            width: 20%;
    }
    .image-banner > img {
        width: 100%;
    }
    .sign-in{ 
        display: flex;
        justify-content:space-between;
        margin: 50px 0;
    }

    .sign-btn {
        text-decoration: none;
        color: black;
        border-bottom-style: solid;
        border-color: red;
    }
    .register-btn {
        text-decoration: none;
        color: black;
    }
    input[type=text], input[type=password]{
        margin-top: 10px;
        padding: 15px 10px;
        padding-top: 15px;
        width: 100%;
        border-radius: 4px;
        outline: none;
        border: 2px solid rgb(241, 243, 244);
    }
     button {
        background-color: rgb(255, 72, 88);
        border-radius: 4px;
        color: white;
        border:none;
        padding: 18px 0;
        width: 100%;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 20px;
    } 
    .base{ 
        display: flex;
        justify-content:space-between;
        margin: 50px 0;
        text-decoration: none;
        color: black;
    }
    .base-content{ 
        text-decoration: none;
        color: black;
    }

    .logo{
        margin: 20px 0;
    }
    .password{
        display: flex;
        justify-content:space-between;
        margin: 15px 0;
    }
    .sign-btn:hover, .register-btn:hover, .base-content:hover{
        color:red;
    }  
    @media only screen and (max-width: 600px) {
        .login-head{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto;
            grid-column-gap: 10px;
            margin:20px;
           
        }
     
        .image-banner > img {
            width:100%

        }
    }
     @media only screen and (max-width: 767px) {
        img{
            width: 40%;
        }
      }
    `
