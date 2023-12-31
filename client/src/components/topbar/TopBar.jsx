import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>
{user && <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
}          <li className="topListItem" onClick={handleLogout}>{user && <Link className="link" to="/login" >LOGOUT</Link>}</li>
        </ul>
      </div>
      <div className="topRight">
        {/*
          user ? (
            <Link className="link" to="/settings">
            <img className="topImg"
            src={PF + user.profilePic}
             alt="" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
          */
        }
      </div>
    </div>
  )
}
