import React from "react"

import { Link } from "react-router-dom"

const Bottom = () => {
    return (
        <div className="bottom-main-div">
            <div className="bottom-div">

                <div className="bottom-div1">
                    <Link className="link" to="/blog">Blog</Link>
                </div>

                <div className="bottom-div2">
                    <Link className="link" to="/">Homepage</Link>
                </div>

                <div className="bottom-div3">
                    <Link className="link" to="/aboutus">About Us</Link>
                </div>

            </div>
            <div className="bottom-div02">
                
                <div className="bottom-div1">
                    <Link className="link" to="/privacypolicy">Privacy Policy</Link>
                </div>

                <div className="bottom-div2">
                    <Link className="link" to="/termsandconditions">Terms and Conditions</Link>
                </div>
                
                <div className="bottom-div3">
                    <Link className="link" to="/contactus">Contact Us</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Bottom