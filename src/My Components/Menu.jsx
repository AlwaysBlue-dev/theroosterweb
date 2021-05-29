import React from "react";
import menu from "../Images/Menu/menu.jpg";
import menu2 from "../Images/Menu/menu2.jpg";
const Menu = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <img src={menu} alt="menu" />
          <img src={menu2} alt="menu" />
        </div>
      </div>
    </>
  );
};
export default Menu;
