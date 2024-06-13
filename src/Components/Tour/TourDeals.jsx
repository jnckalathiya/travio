import React from 'react'
import TourDealsItem from '../Items/TourDealsItem'

const TourDeals = () => {
    const tourdeals = [
        {
            img:'assets/img/offer-1.jpg', title:'New York City', price:'$150'
        },
        {
            img:'assets/img/offer-2.jpg', title:'Vietnam', price:'$170'
        },
        {
            img:'assets/img/offer-3.jpg', title:'Norway Lake', price:'$190'
        },
        {
            img:'assets/img/offer-4.jpg', title:'New York City', price:'$170'
        },
        {
            img:'assets/img/offer-5.jpg', title:'Vietnam', price:'$150'
        },
        {
            img:'assets/img/offer-6.jpg', title:'Norway Lake', price:'$190'
        }
    ]
    return (
        <>
            <div className="tour-deal-outer">
                <div className="container">
                    <div className="heading">
                        <p>Deals &amp; Offers</p>
                        <h2>Last Minute Amazing Deals</h2>
                    </div>
                    <div className="row">
                        {
                            tourdeals.map((i) => <TourDealsItem value={i} /> )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourDeals