import React from 'react'
import CountUp from 'react-countup';

const CounterItems = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 item">
            <div className="item-inner">
                <div className="partten"><img src={props.value.img} alt="" /></div>
                <div className="text-content">
                    <span><CountUp end={props.value.count} duration={10} separator="" /></span>
                    <span>{props.value.plus}</span>
                    <p>{props.value.name}</p>
                </div>
            </div>
        </div>
    )
}

export default CounterItems
