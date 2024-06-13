import React from 'react'
import CounterItems from './Items/CounterItems'

const Counter = () => {
    const count = [
        {
            img: 'assets/img/shape-5.png',
            count:2000,
            plus:'+',
            name:'Awesome Hikers'
        },
        {
            img: 'assets/img/shape-6.png',
            count:70,
            plus:'+',
            name:'Stunning Places'
        },
        {
            img: 'assets/img/shape-7.png',
            count:1200,
            plus:'+',
            name:'Miles to Hike'
        },
        {
            img: 'assets/img/shape-8.png',
            count:15,
            name:'Years in Service'
        },
    ]
    return (
        <>
            <div className="counter-outer">
                <div className="anim-icon">
                    <div className="icon-1"></div>
                    <div className="icon-2"></div>
                </div>
                <div className="container">
                    <div className="counter-inner">
                        <div className="row">
                            {count.map((i) =><CounterItems value={i}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
