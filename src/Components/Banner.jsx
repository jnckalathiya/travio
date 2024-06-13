import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Banner = () => {
    return (
        <>
            <div className="banner-outer">
                <div className="container">
                    <div className="banner-inner">
                        <div className="title-text">
                            <h2>Explore Y<span>our Travel</span></h2>
                            <p>Discover your next great adventure, become an explorer to get started!</p>
                        </div>
                        <div className="form-inner">
                            <form method='post' className='booking-form'>
                                <div className="form-group">
                                    <input type="text" name="service" placeholder="Where to?" />
                                </div>
                                <div className="form-group">
                                    <input type="date" name="date" required="" />
                                </div>
                                <div className="form-group">
                                    <select className="wide">
                                        <option data-display="Travel Type" selected disabled>Travel Type</option>
                                        <option value="1">Adventure Tours</option>
                                        <option value="2">City Tours</option>
                                        <option value="3">Couple Tours</option>
                                        <option value="4">Group Tours</option>
                                    </select>
                                </div>
                                <div className="msg-button"><button type="submit" className="button"><FaSearch/> Find Now</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="layer"></div>
            </div>
        </>
    )
}

export default Banner
