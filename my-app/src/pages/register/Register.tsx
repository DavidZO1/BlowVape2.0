import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  // handle register
  const registerUser = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

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
        // Puedes redirigir al usuario a otra página o realizar otras acciones después del registro
      } else {
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al comunicarse con el servidor:', error);
    }
  };

  return (
    <div className='register'>
      <form onSubmit={registerUser}>
        <div className='input-field'>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            type='email'
            placeholder='Email'
            value={registerEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Password'
            value={registerPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterPassword(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Repeat Password'
            value={repeatPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className='register-actions'>
          <p>
            Already registered? <Link to='/login' style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </p>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
