import React from "react"

import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <div className="blog-div">
            <h3 className="aboutus-heading">Blog</h3>

            <Link className="blog-link" to="/2021SneakerTrendPredictions">
                2021 Sneaker trend predictions
            </Link>

            <Link className="blog-link" to="/2021DesignersToWatch">
                Designers to watch in 2021
            </Link>

            <Link className="blog-link" to="/mostValuableSneaker">
                Most valuable sneakers of 2020
            </Link>

            <Link className="blog-link" to="/bestNikeDunk">
                Best Nike SB Dunk releases of 2020
            </Link>

            <Link className="blog-link" to="/sneakerBrands">
                Sneaker brands to watch in 2021
            </Link>

            <Link className="blog-link" to="/newBalance">
                New Balance 2020
            </Link>

            <Link className="blog-link" to="/materialMatters">
                Material matters
            </Link>

            <Link className="blog-link" to="/colorwayCorral">
                Colorway corral: safari
            </Link>

            <Link className="blog-link" to="/jerryLorenzo">
                Jerry Lorenzo swaps the swoosh for three stripes
            </Link>

            <Link className="blog-link" to="/pumaSuede">
                Puma Suede: sneaker for all time
            </Link>
        </div>
    )
}

export default Blog