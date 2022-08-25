import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 
 * If it's used in components represent pages in the website, it will prevent users from
 * accessing that page while they are logged in.
 *
 */

 const redirectToHome = () => {
        
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/");
        }
    }, []);   
}


/**
 *
 * If it's used in components represent pages in the website, it will prevent users from
 * accessing that page while they are not logged in.
 * 
 */

const redirectToLogin = () => {
        
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
        navigate("/login");
        }
    }, []);
}

export default {
    redirectToHome,
    redirectToLogin,
}