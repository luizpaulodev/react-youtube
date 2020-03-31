import React from 'react'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';

const VideoList = props => {

  function renderVideo(video) {
    return (
      <List.Item key={video.etag} onClick={() => props.reproduz(video)}>
        <Image src={video.snippet.thumbnails.default.url}/>
        <List.Content>
          <List.Header>
            {video.snippet.title}
          </List.Header>  
        </List.Content>   
      </List.Item>
    );
  }

  function carregando() {
    return (
      <Dimmer active inverted>
        <Loader size='medium'>Carregando...</Loader>
      </Dimmer>
    );
  }

  return (
    <div className="video-list">

      {props.carregando && carregando()}

      <List verticalAlign='middle'>
        {props.videos.map(video => renderVideo(video))}
      </List>
    </div>
  )
}

export default VideoList;