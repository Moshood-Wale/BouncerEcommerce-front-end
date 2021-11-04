import NavBar from '../components/verifyOTP/NavBar';
import VerifyOtp from '../components/verifyOTP/VerifyOtp';
import '../styles/verifyOtpPage.css';


function VerifyOtpPage() {
  return (
    <div className="container">
        <NavBar />
        <VerifyOtp />
    </div>
  );
}

export default VerifyOtpPage;
