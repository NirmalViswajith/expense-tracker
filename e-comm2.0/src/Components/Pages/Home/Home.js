import React, { Fragment } from 'react'
import './Home.css'
import Tours from './Tours'


const Home = () => {
  return (
    <Fragment>
    
    <div className="latestAlbum">
      <div className=" ">
        <div className="album-para">
          <p>Get our Latest Album</p>
        </div>
        <div className="main-playBtn">
          <div className="playBtn">
            <div className="play-button-outer">
              <div className="play-button"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="tours">TOURS</div>
      <Tours />
      <Tours />
      <Tours />
      <Tours />
      <Tours />
      <Tours />
    
    </Fragment>
  )
}

export default Home;