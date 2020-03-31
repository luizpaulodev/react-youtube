import React, { useEffect } from 'react';
import { Segment, Input } from 'semantic-ui-react';

function SearchBar(props) {

  useEffect(() => {
    props.buscaVideo('React com Redux')
  }, [props]);

  function pesquisaTermo(e) {
    if(e.keyCode === 13) {
      const termo = e.target.value;
      
      props.buscaVideo(termo);
    }
  }

  return (
    <div className="search-bar">
       <Segment stacked>
         <Input 
          icon='search' 
          size='large' 
          placeholder='Search...'
          onKeyDown={e => pesquisaTermo(e)} />
      </Segment>
    </div>
  )
}

export default SearchBar;
