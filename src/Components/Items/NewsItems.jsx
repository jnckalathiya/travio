import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NewsItems = (props) => {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 item'>
            <div className="item-inner">
                <div className="img-content">
                    <img src={props.value.img} alt="" />
                    <div className="post-date">
                        <span><FaRegCalendarAlt /></span>
                        {props.value.date}
                    </div>
                </div>
                <div className="text-content">
                <div className="category"><Link to="">Lifestyle</Link></div>
                    <h3>
                        <Link to='blogdetails'>{props.value.title}</Link>
                    </h3>
                    <div className="post-info">
                        <span><span>By</span> <Link to=''>Eva Green</Link></span>
                        <span>- {props.value.date}</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.</p>
                    <Link to="blogdetails" className="button">See Details</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsItems
