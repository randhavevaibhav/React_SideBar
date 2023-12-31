import "../styles/NewSidebar.css";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, title: "Home", isOpen: false },
    { id: 2, title: "About", isOpen: false },
    { id: 3, title: "Services", isOpen: false },
    { id: 4, title: "Contact", isOpen: false },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    
    
    setIsSidebarOpen(!isSidebarOpen);
    if(isSidebarOpen)
    {
        closeAllSubMenu();
    }
  };
  const closeAllSubMenu = ()=>{
    
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
      true ? { ...item, isOpen: false } : item
      )
    );

  }

  const toggleMenu = (id) => {
    
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        {
            return item.id === id ? { ...item, isOpen: !item.isOpen } : item;
        }
      )
     
    );
    //for opening only one sub-menu
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        {
            return item.id !== id ? { ...item, isOpen: false } : item;
        }
      )
     
    );
    
  };

  return (
    <>
      <div className="hamburger-icon" onClick={()=>{
        toggleSidebar();
        
      }}>
        <FontAwesomeIcon icon={faBars} size="xl" color="black"/>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "openSidebar" : "closedSidebar"}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <div className="menu-item" onClick={() => {
                toggleMenu(item.id);
                
              }}>
                {item.title}
              </div>
              {item.isOpen && (
                <ul className="sub-menu" >
                 
                  <li >Sub-Item 1</li>
                  <li >Sub-Item 2</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
