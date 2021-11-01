import NavBar from '../components/register/NavBar';
import Register from '../components/register/Register';
import '../styles/registerpage.css';


function RegisterPage() {
  return (
    <div className="container">
        <NavBar />
        <Register />
    </div>
  );
}

export default RegisterPage;
