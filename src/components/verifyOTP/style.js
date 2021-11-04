import styled from "styled-components";


const VerifyOtpWrapper = styled.div`
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


.sub-main .bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.sub-main .bottom .vendor{
    text-decoration: none;
    color: black;
}
.veri{
    margin-left: 1.1rem;
}

input[type=text], input[type=submit], input[type=email]{
    margin-top: 10px;
    padding: 15px 10px;
    margin-top: 15px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 2px solid rgb(241, 243, 244);
}
.butt{
    background-color: rgb(255, 72, 88);
    color: white;
    border:none;
    padding: 15px 10px;
    padding: 18px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
}
.forgot{
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

.sub-main .otp-code{
    padding-top: 1.00rem;
}
.sub-main .otp-code > label, .sub-main .email > label,
{
    margin-bottom: 20px;
    font-weight: 400;
    color:rgb(34, 38, 42);
    font-size: 14px;
}
.sub-main .otp-code, .sub-main .email {
    margin: 20px 0;
}



`;

export default VerifyOtpWrapper;
