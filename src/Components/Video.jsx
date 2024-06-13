import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Video = () => {
    return (
        <div className='video-outer'>
            <div className="container">
                <div className="video-inner">
                    <h2>Explore Your Travel</h2>
                    <p>Your New Traveling Idea</p>
                    <div className="video-btn">
                        <Link to="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s">
                        <BsPlayCircle/>
                        <span class="border-animation border-1"></span>
                        <span class="border-animation border-2"></span>
                        <span class="border-animation border-3"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
