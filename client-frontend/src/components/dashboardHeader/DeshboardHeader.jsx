import React from 'react'

import './dashboardHeader.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRotateRight ,faCalendarDays } from '@fortawesome/free-solid-svg-icons'


const DeshboardHeader = () => {
  return (
    <div className="deshboardHead">
        <div className="HeaderName">
            <h2 className="order">Order</h2>
        </div>
        <div className="searchBoxContainer">
            <div className="searchBox">
                <input type="text" name="orderSearch" id="orderSearch" placeholder='Search Here...'/>
                <FontAwesomeIcon className='searchBoxIcon' icon={faMagnifyingGlass} />
            </div>
            <div className="reloadPage">
                <FontAwesomeIcon className='searchBoxIcon' icon={faRotateRight} />
            </div>
        </div>
        <div className="dateSelector">
            <FontAwesomeIcon className='searchBoxIcon' icon={faCalendarDays} />
            <div className="selectedDate">Date</div>
        </div>
    </div>
  )
}

export default DeshboardHeader
