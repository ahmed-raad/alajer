import userService from "../../services/userService";

function Logout() {
    userService.logout();
    window.location = "/";
    return null;
}

export default Logout;