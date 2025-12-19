import { useState } from 'react'
import { Button } from './components/atoms/button/Button'
import Logo from './assets/icons/fullLogo.svg'
import './styles/app.scss'
import LoginImage from './assets/images/pablo-sign.png'
import Input from './components/atoms/input/Input'
import { useNavigate } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

function App() {
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard')
    }, 3000);
  }

  return (
    <div className="app">

      <div className="container">


        <div className='left'>
          <div className='logo'><img src={Logo} alt="" /></div>
          <div className=''>
            <img src={LoginImage} alt="" />
          </div>
        </div>

        <div className='right'>
          <div className='welcome'>
            <h2 className='text' >Welcome!</h2>
            <p className='text text--sub'>Enter details to login.</p>
          </div>

          <div className='form'>
            <Input type="text" name="email" id="email" placeholder="Email" />
            <Input type="password" name="password" id="password" placeholder="Password" />

            <div className='forgot-password'>FORGOT PASSWORD?</div>

            <Button variant="primary" onClick={() => handleLogin()} >
              {loading ? <MoonLoader size={15} color='#fff' /> : 'LOG IN'}
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
