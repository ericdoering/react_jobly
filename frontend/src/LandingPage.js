import React from "react";
import { Link } from "react-router-dom"


function LandingPage() {
  return (
    <div>
        <h1>Jobly</h1>
            <h2>All the jobs in one, convenient place.</h2>
            <Link to="/login">
                <button type="button">
                    Log in
                </button>
            </Link>
            <Link to="/register">
                <button type="button">
                    Sign up
                </button>
            </Link>  
    </div>
  );
}

export default LandingPage;
