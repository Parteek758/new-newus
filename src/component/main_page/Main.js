import React, { Fragment } from 'react'
import main_image from '../images/main/banner-side-image.png'
function Main() {
  return (
    <Fragment>
        <section className="section1">
            <div className="main_headding">
                <div className="text">
                    <h2>Welcome to the world of latest Technologies.</h2>
                    <ul>
                        <li>26+ Years of excellence.</li>
                        <li>1500+ training courses offered Online & Offline.</li>
                        <li>Trained over 1 lakh students worldwide.</li>
                    </ul>
                </div>
            </div>
            <div className="main_image">
                <img src={main_image} alt="main-logo" />
            </div>
        </section>
    </Fragment>
  )
}

export default Main