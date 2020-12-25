import React from "react"

import { Link } from "react-router-dom"

const Bottom = () => {
    return (
        <div className="bottom-main-div">
            <div className="bottom-div">
                <Link className="link" to="/blog">Blog</Link>
                <Link className="link" to="/">Homepage</Link>
                <Link className="link" to="/aboutus">About Us</Link>
            </div>
            <div className="bottom-div2">
                <Link className="link" to="/privacypolicy">Privacy Policy</Link>
                <Link className="link" to="/termsandconditions">Terms and Conditions</Link>
                <Link className="link" to="/contactus">Contact Us</Link>
            </div>
        </div>
    )
}

export default Bottom