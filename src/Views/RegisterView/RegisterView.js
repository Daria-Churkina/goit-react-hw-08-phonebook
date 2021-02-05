import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';
import s from '../RegisterView/RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1 className={s.header}>Signing up</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            className={s.registerinput}
          />
        </label>

        <label className={s.label}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            className={s.registerinput}
          />
        </label>

        <label className={s.label}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className={s.registerinput}
          />
        </label>

        <button className={s.registerbutton} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
