import React from 'react'
import logo from '../images/Img.png'
import logo1 from '../images/image 52.png'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './Overlay.css'

function Overlay() {
    return (
        <div className="overlay">
           
            <img src={logo} className="overlay__img" />
            <img src={logo1} className="homedecor"/>
           
            <SearchIcon className="search" />
            <p className="search_text">Search</p>
            <p className="help">Help</p>
            <p className="account">Account</p>
            <LocalMallOutlinedIcon className="vector"/>
            <h1 className="overlay__title">Cari Cari</h1>
            <p className="overlay__text">Live from their sofa to yours.Get closer to your favorite artists, and never miss out.</p>
        </div>
    )
}

export default Overlay
