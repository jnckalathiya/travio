import React from 'react'
import DestinationItems from '../Items/DestinationItems'
import { Masonry } from '@mui/lab'

const DestinationList = () => {
    const destination = [
        {
            img: 'assets/img/place-1.jpg',
            name: 'New York City'
        },
        {
            img: 'assets/img/place-13.jpg',
            name: 'Norway Lake'
        }, {
            img: 'assets/img/place-5.jpg',
            name: 'Mont Blanc'
        },

        {
            img: 'assets/img/place-10.jpg',
            name: 'Costa Rica'
        },
        {
            img: 'assets/img/place-4.jpg',
            name: 'Vietnam'
        },
        
    ]
    return (
        <>
            <div className="destination-outer">
                <div className="container">
                    <div className="row destination-list">

                        <Masonry columns={3}>
                            {destination.map((i) => <DestinationItems value={i} />)}
                        </Masonry>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationList
