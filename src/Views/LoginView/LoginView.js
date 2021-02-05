import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';
import s from '../LoginView/LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.header}>Please log in</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <input
            className={s.loginput}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>

        <label className={s.label}>
          <input
            className={s.loginput}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        <button className={s.loginbutton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
