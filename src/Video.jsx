import React from 'react'
import './Video.css'
import img1 from './vid/1.mp4'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video() {
  return (
    <div className='video'>
        <div className="video_player">
        Video
        </div>
        <VideoFooter />
        <VideoSidebar />
    </div>
  )
}

export default Video