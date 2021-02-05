import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../Redux/auth';
import defaultAvatar from '../../images/avatar.jpg';
import s from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="Default Avatar" width="32" className={s.avatar} />
      <span className={s.welcome}>Nice to see you, {name}</span>
      <button
        className={s.logoutbutton}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
