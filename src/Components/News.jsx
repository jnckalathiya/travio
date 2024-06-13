import React from 'react'
import NewsItems from './Items/NewsItems'

const News = () => {
    const news = [
        {
            date: '5 Oct, 2020',
            img:'assets/img/tour-1.jpg',
            title: 'Including animation in your design system'
        },
        {
            date: '4 Oct, 2020',
            img:'assets/img/tour-2.jpg',
            title: 'Strategic & commercial with issues.'
        },
        {
            date: '3 Oct, 2020',
            img:'assets/img/tour-3.jpg',
            title: 'Best interior design idea for your home.'
        },
    ]
    return (
        <div className='news-outer'>
            <div className="container">
                <div className="news-inner">
                    <div className="heading">
                        <p>News &amp; Articles</p>
                        <h2>Stay Update with Travio Tips</h2>
                         </div>
                    <div className="row">
                    {
                        news.map((i) => <NewsItems value={i}/>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
