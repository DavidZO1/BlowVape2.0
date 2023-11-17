import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = (): JSX.Element => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const registerUser = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (registerPassword !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    const newUserDetails = {
      firstName,
      lastName,
      registerEmail,
      registerPassword,
      repeatPassword,
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserDetails),
      });

      if (response.ok) {
        console.log('Usuario registrado correctamente');
        // Redirige al usuario a la página de inicio después del registro exitoso
        navigate('/');
      } else {
        console.error('Error al registrar usuario');
        setError('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al comunicarse con el servidor:', error);
      setError('Error al comunicarse con el servidor');
    }
  };

  return (
    <div className='register'>
      <form onSubmit={registerUser}>
        <div className='input-field'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='registerEmail'>Email</label>
          <input
            type='email'
            id='registerEmail'
            value={registerEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='registerPassword'>Password</label>
          <input
            type='password'
            id='registerPassword'
            value={registerPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterPassword(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='repeatPassword'>Repeat Password</label>
          <input
            type='password'
            id='repeatPassword'
            value={repeatPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className='register-actions'>
          <p>
            Already registered? <Link to='/login'>Login</Link>
          </p>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
