import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateLoginStatus } from '../../features/slices/authSlice';
import Swal from 'sweetalert2';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch: Dispatch<any> = useDispatch();
  const { users } = useSelector((store: any) => store.auth);

  // user login
  const handleUserLogin = async (e: { preventDefault: () => void }): Promise<void> => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        // Actualiza el estado del login en Redux
        dispatch(updateLoginStatus(true));
        setEmail('');
        setPassword('');
      } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid email or password',
        });
      }
    } catch (error) {
      console.error('Error al comunicarse con el servidor:', error);
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleUserLogin}>
        <div className='input-field'>
          <input
            type='email'
            placeholder='email'
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='password'
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>
        <div className='login-actions' style={{ marginTop: '18px' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            Forgot Password?
          </Link>
          <Link to='/register' style={{ marginLeft: '15px', textDecoration: 'none' }}>
            Don't have an account yet?
          </Link>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
