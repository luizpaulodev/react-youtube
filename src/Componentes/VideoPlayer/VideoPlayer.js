import React from 'react'
import { Advertisement, Embed } from 'semantic-ui-react';

const  VideoPlayer = (props) => {
  return (
    <div className="video-player">
      {
        !props.video.id && (
          <Advertisement style={{ height: '433px' }} unit='top banner' test='Escolha uma video para reproduzir'/>
        )
      }
      {
        props.video.id && (
          <div>
            <Embed               
              autoplay={true} 
              id={props.video.id.videoId} 
              source='youtube' 
              placeholder={props.video.snippet.thumbnails.high.url}
            />

            <h3>{props.video.snippet.title}</h3>
            <p>{props.video.snippet.description}</p>
          </div>
        )
      }      
    </div>
  )
}

export default VideoPlayer;