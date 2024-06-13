import React from 'react'
import Signup from '../Signup'

const Account = () => {
    return (
        <div className="signup-outer row">
            <div className="item col-lg-6 col-md-12 col-sm-12 ">
                <div className="img-content">
                    <img src="assets/img/register.jpg" alt="" />
                    <div className="text-content">
                        <h3>Travio Turs</h3>
                        <p>
                            Discover your next great adventure
                        </p>
                    </div>
                </div>
            </div>
            <Signup/>
        </div>
    )
}

export default Account
