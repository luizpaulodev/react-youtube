import React from 'react';
import { Segment, Input } from 'semantic-ui-react';

function SearchBar() {

  function pesquisaTermo(e) {
    if(e.keyCode === 13) {
      const termo = e.target.value;
      console.log(termo);
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

export default SearchBar
