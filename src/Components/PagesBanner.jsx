import React from 'react'

const PagesBanner = (props) => {
  return (
    <>
      <div className="pages-outer">
        <div className="container">
            <div className="pages-inner">
                    <h1>{props.title}</h1>
                    <p>Discover your next great adventure</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default PagesBanner
