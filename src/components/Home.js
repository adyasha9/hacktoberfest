import React from 'react'
import Overlay from './Overlay'
import Shows from './Shows'
import Review from './Review'
import './Overlay.css'

function Home() {
    return (
        <div>
           <Overlay/>
           <h1 className="page_text">Upcoming Shows</h1>
           <Shows/>
           <h1 className="page_text">Reviews</h1>
           <Review/>
        </div>
    )
}

export default Home
