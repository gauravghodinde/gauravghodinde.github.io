import { Container , Navbar} from "react-bootstrap";

import '../styles/navbarOne.css'
export const MyNavbarOne = () => {
  return (
    <div>
      <div className="navigation">
      <div className="div">
        <div className="login">
          <div className="text-wrapper">Sign Up</div>
          <div className="text-wrapper-2">Sign In</div>
        </div>
        <div className="startup-framework"><div className="startup">Welcome</div></div>
        <div className="small-dark-outline"><div className="sign-up">Home</div></div>
      </div>
    </div>
    </div>
  );
};
export default MyNavbarOne;
