import '../CSS/Register.css';
import LoginImg from '../Images/Login.png'
import Spline from '@splinetool/react-spline'
import Email from '../Images/Email.png'
import Password from '../Images/Password.png'
import Login from '../Images/Login.png'
import Phone from '../Images/Phone.png'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='mainc'>

      <div className='otherdiv'>

        <div className='LoginRegi'>

        {/* <Spline scene="https://prod.spline.design/lhUMsZQ-SCL5n-0A/scene.splinecode" style={{marginLeft:"100px"}} /> */}


          <div style={{ width: '250px', height: "60px", alignItems: 'center', background: "#D4ADFC", textAlign: 'center', display: 'flex', flexDirection: 'row', }}>
            <img src={LoginImg} alt='LoginImage' style={{ marginLeft: '30px' }} />
            <p style={{ marginLeft: "30px", fontSize: '20px', fontWeight: 500 }}>Login</p>
          </div>

          <div style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', marginTop: "30px" }}>
            <img src={LoginImg} alt='LoginImage' style={{ marginLeft: '30px' }} />
            <p style={{ marginLeft: "30px", fontSize: '20px', fontWeight: 800, color: "#000", }}>Register</p>
          </div>

        </div>

        <svg width="200" height="400" style={{ marginTop: "370px", zIndex: -1 }} viewBox="0 0 422 259" fill="none">
          <g style={{ mixBlendMode: 'lighten' }}>
            <path d="M421.73 190C421.73 294.934 327.486 380 211.23 380C94.9742 380 0.730103 294.934 0.730103 190C0.730103 85.0659 94.9742 0 211.23 0C327.486 0 421.73 85.0659 421.73 190Z" fill="#6023A0" />
          </g>
        </svg>

        <div className='othersvginside'>
          <svg width="270" height="560" style={{ marginLeft: "150px", marginTop: "-550px", zIndex: -1 }} viewBox="0 0 422 259" fill="none">
            <g style={{ mixBlendMode: 'lighten' }}>
              <path d="M421.73 190C421.73 294.934 327.486 380 211.23 380C94.9742 380 0.730103 294.934 0.730103 190C0.730103 85.0659 94.9742 0 211.23 0C327.486 0 421.73 85.0659 421.73 190Z" fill="#6023A0" />
            </g>
          </svg>
        </div>

      </div>


      <div className='logindiv'>

        <div className='centereddiv'>


          <h2>Register</h2>

          <div style={{ display: "flex", flexDirection: "column", justifyItems: 'center', alignItems: 'center' }}>

            <div style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', border: '1px solid black', marginTop: '30px' }}>
              <img src={Login} alt='LoginImage' style={{ marginLeft: '30px' }} />
              <input style={{ border: 'none', marginLeft: '20px', height: '5vh', marginTop: "10px", fontWeight: 500 }} type='text' placeholder='Username' />
            </div>

            <div style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', border: '1px solid black', marginTop: '30px' }}>
              <img src={Password} alt='LoginImage' style={{ marginLeft: '30px' }} />
              <input style={{ border: 'none', marginLeft: '20px', height: '5vh', marginTop: "10px", fontWeight: 500 }} type='password' placeholder='Password' />
            </div>

            <div style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', border: '1px solid black', marginTop: '30px' }}>
              <img src={Email} alt='LoginImage' style={{ marginLeft: '30px' }} />
              <input style={{ border: 'none', marginLeft: '20px', height: '5vh', marginTop: "10px", fontWeight: 500 }} type='email' placeholder='E-Mail' />
            </div>

            <div style={{ width: '300px', height: "60px", alignItems: 'center', background: "white", textAlign: 'center', borderRadius: '100px', display: 'flex', flexDirection: 'row', border: '1px solid black', marginTop: '30px' }}>
              <img src={Phone} alt='LoginImage' style={{ marginLeft: '30px' }} />
              <input style={{ border: 'none', marginLeft: '20px', height: '5vh', marginTop: "10px", fontWeight: 500 }} type='phonenumber' placeholder='Phone-Number' />
            </div>


            <button style={{ width: '300px', height: "60px", background: "linear-gradient(180deg, #6D31B5 0%, #360D6D 100%)", textAlign: 'center', borderRadius: '100px', color: "white", border: '1px solid black', marginTop: '30px', fontSize: "30px" }}>Continue</button>

            <Link to="/login" style={{ marginTop: '20px', textDecoration: 'none', color: '#0D2EDD' }}>Already Had an Account? Login</Link>

          </div>

        </div>


      </div>




    </div>
  );
}

export default Register;
