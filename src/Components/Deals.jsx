import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DealsItems from './Items/DealsItems';

const Deals = () => {

    const deal =[
        {
            img: "assets/img/deals-1.jpg",
        },
        {
            img: "assets/img/deals-2.jpg",
        }
    ]

    return (
        <>
            <div className="deal-outer">
                <div className="container">
                    <div className="deal-inner">
                        <div className="heading">
                            <p>Deals &amp; Offers</p>
                            <h2>Last Minute Amazing Deals</h2>
                        </div>
                        <div className="content">
                        <OwlCarousel className='owl-theme' loop margin={30} items={1} nav autoplay autoplayTimeout={4000} autoplaySpeed={3000} dots={false}>                                 
                                {
                                    deal.map((i) =><DealsItems value={i}/>)
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deals
