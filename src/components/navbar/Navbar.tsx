// import "./Navbar.scss";

// import React from "react";
// const image: HTMLImageElement = new Image();
// image.src = "./58f37720a4fa116215a9240f.png";;

// const Navbar: React.FC = () => {
  
//   return (
//     <div className="navbar">
//       <img src={image.src} alt="R&M" />
//     </div>
//   );
// };

// export default Navbar;

import "./Navbar.scss";
import React from "react";
import rm from "../../asset/randm.png";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="navbar">
      <img src={rm} alt="R&M" />
    </div>
  );
};

export default Navbar;

