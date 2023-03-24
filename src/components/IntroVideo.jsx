import React from 'react'
import video from "../assets/MBA Chai Wala.mp4"
import "../styles/intro.scss"

const IntroVideo = () => {
    return (
        <div className="intro">
            <video src={video} muted autoPlay loop controlsList="noDownload"></video>
            <div></div>
        </div>
    )
}

export default IntroVideo;
