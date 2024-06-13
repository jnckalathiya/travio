import React from 'react'
import ExploreItems from './Items/ExploreItems'

const Explore = () => {
    const items = [
        {
            id: 1,
            name: 'Moscow City'
        },
        {
            id: 2,
            name: 'Affrican Park'
        },
        {
            id: 3,
            name: 'Norway Lake'
        },
        {
            id: 4,
            name: 'New York City'
        },
    ]
    return (
        <>
            <div className="explore-outer">
                <div className="explore-inner">
                    <div className="heading">
                        <p>Modern &amp; Beautiful</p>
                        <h2>Explore the World for Travel</h2>
                    </div>
                    <div className="map">
                        <div className="map-inner">
                            {
                                items.map((i) => <ExploreItems value={i} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore
