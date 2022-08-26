import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignIn,
  faCommenting,
  faTags,
  faHome,
  faUser,
  faSignOut,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlusCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default {
    SignUp: <FontAwesomeIcon icon={faUserPlus} />,
    SignIn: <FontAwesomeIcon icon={faSignIn} />,
    Requests: <FontAwesomeIcon icon={faCommenting} />,
    Services: <FontAwesomeIcon icon={faTags} />,
    Home: <FontAwesomeIcon icon={faHome} />,
    User: <FontAwesomeIcon icon={faUser} />,
    SignOut: <FontAwesomeIcon icon={faSignOut} />,
      
    AngleDoubleLeft: <FontAwesomeIcon icon={faAngleDoubleLeft} />,
    AngleDoubleRight: <FontAwesomeIcon icon={faAngleDoubleRight} />,
    PlusCircle: <FontAwesomeIcon icon={faPlusCircle} />,
    PaperPlane: <FontAwesomeIcon icon={faPaperPlane} />,

}