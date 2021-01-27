import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  
  const users = props.state.users;
  const cookie = props.cookies.user

  const currentUser = users && users.filter(user => user.id == props.cookies.user)[0];

  return (

    <div className="Header">
      <div className="logo">
        <h1>ech<FontAwesomeIcon id="play-icon" icon={faPlayCircle} /></h1>
        <h6>&nbsp;&nbsp;Replay your moments</h6>
      </div>
      <div className="divider" />
      <div className="user-info">
        {props.cookies.user ? <h5>Welcome, {currentUser && currentUser.first_name}!</h5> : ""}
        {props.cookies.user && currentUser && <img src={`https://ui-avatars.com/api/?name=${currentUser.first_name}+${currentUser.last_name}&background=random&rounded=true`} alt="avatar" />}
      </div>
      {props.cookies.user && <div className="divider" />}
    </div>

  );
}