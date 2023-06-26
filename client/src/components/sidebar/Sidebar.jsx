import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/rac_logo2.png";
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCats = async () =>{
      const res = await axios.get("/categories");
      setCategories(res.data);
    }
    getCats()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT RAC</span>
        <img src={Logo2} alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          CATEGORIES
        </span>
        <ul className="sidebarList">
          {
            categories.map((category) => 
              (
                <Link to={`/?cat=${category.name}`} className="link">
                  <li className="sidebarListItem">{category.name}</li>
                </Link>
              )
            )
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
