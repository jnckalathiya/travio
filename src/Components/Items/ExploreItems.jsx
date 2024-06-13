import React from 'react'

const ExploreItems = (props) => {
    return (
        <div className="item">
            <div className="item-inner">
                <div className="img-content">
                    <img src="assets/img/marker-1.png" alt="" />
                    <span>{props.value.id}</span>
                </div>
                <div className="text-content">
                    <h3>{props.value.name}</h3>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}

export default ExploreItems
