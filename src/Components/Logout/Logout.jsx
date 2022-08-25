import React from 'react';
import { Navigate } from "react-router-dom";

function Logout() {    
    localStorage.clear();
    return <Navigate to="/" replace />;;
}

export default Logout;