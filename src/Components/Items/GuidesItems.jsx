import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const GuidesItems = (props) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 team'>
        <div className="inner-item">
          <div className="img-content">
            <img src={props.value.img} alt="" />
          </div>
          <div className="text-content">
            <h3>{props.value.name}</h3>
            <span>Tour Guide</span>
            <ul>
              <li>
                <Link to="https://www.facebook.com/"><FaFacebookF/></Link>
              </li>
              <li>
                <Link to="https://x.com/"><FaXTwitter/></Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/"><FaInstagram/></Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default GuidesItems