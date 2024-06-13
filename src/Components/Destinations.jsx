import React from 'react'
import { Link } from 'react-router-dom'
import DestinationItems from './Items/DestinationItems'

const Destinations = () => {
    const destination = [
        {
            img: 'assets/img/place-1.jpg',
            name: 'New York City'
        },
        {
            img: 'assets/img/place-2.jpg',
            name: 'Norway Lake'
        },
        {
            img: 'assets/img/place-3.jpg',
            name: 'Affrican Park'
        },
        {
            img: 'assets/img/place-4.jpg',
            name: 'Vietnam'
        }
    ]
    return (
        <>
            <div className="destination-outer">
                <div className="anim-icon">
                    <div className="icon-1" ></div>
                    <div className="icon-2" ></div>
                    <div className="icon-3" ></div>
                </div>
                <div className="container">
                    <div className="destination-inner row">
                        <div className="col-lg-4 col-md-6 col-sm-12 heading-main">
                            <div className="heading">
                                <p>Choose Your place</p>
                                <h2>Popular Destinations</h2>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt.</p>
                            </div>
                        </div>
                        {destination.map((i) => <DestinationItems value={i} />)}
                        <div className="col-lg-4 col-md-6 col-sm-12 link-item">
                            <div className="link-inner">
                                <h3>Find All <br />Destination</h3>
                                <Link to="" className="button">Find Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinations
