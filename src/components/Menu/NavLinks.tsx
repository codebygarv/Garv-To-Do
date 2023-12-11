import { signOut } from "firebase/auth";
import React from "react";
import { database } from '../loginData/FirebaseConfig';

import { NavLink, useLocation , useNavigate } from "react-router-dom";

const links = [
  {
    name: "All tasks",
    path: "/home",
    element:"{<Home/>}"
  }
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }

  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path} style={{marginTop:'22px'}}>
            <NavLink
              to={link.path}
              className={` py-2 w-full block transition ${
                currentPath === link.path ? classActive : ""
              }`}
              style={{
                background: currentPath === link.path ? "hsl(233deg 36% 38%)" : "transparent",
                color: currentPath === link.path ? "white" : "inherit",
              }}
              
            >
              {link.name}
            </NavLink>
            <button onClick={handleClick} style={{ backgroundColor: "#3E4684", color: "white", padding: ".75em", borderRadius: "9px",position:'absolute', bottom:'10px' , left:'50px' }}>SignOut</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
