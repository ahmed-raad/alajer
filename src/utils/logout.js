import { useNavigate } from "react-router-dom";

function logout() {
    const navigate = useNavigate();
    localStorage.clear();
    navigate('/');
}

export default logout;