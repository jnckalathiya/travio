import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            
                <div className="item col-lg-6 col-sm-12 ">
                    <div className="heading">
                        <h3>Signup</h3>
                    </div>
                    <form method="post">
                        <div className="form-group">
                            <input type="text" required />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="form-group">
                            <input type="password" required />
                            <label htmlFor="">Confirm Password</label>
                        </div>
                        <div className="accept">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I accept <Link>terms</Link> and <Link>conditions</Link> and general policy</label>
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Sign Up" className='button' />
                        </div>
                    </form>
                    <p>
                        Already have an account? <Link to="">Sign In</Link>
                    </p>
                </div>
            
        </>
    )
}

export default Signup
