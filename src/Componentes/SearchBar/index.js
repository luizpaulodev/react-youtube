import youtubeSearch from 'youtube-api-v3-search';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import YoutubeApi from '../../api';
import { reproduzirVideo } from '../../store/ducks/ReproduzirVideoDuck';
import { buscaVideoInicio, buscaVideoSucesso, buscaVideoErro } from '../../store/ducks/BuscarVideoDuck';

const API_KEY = YoutubeApi;

const mapDispatchToProps = dispatch => {
  return {
    obterVideos: (termo) => dispatch(obterVideos(termo))
  }
}

const obterVideos = (termo) => {
  return dispatch => {
    dispatch(buscaVideoInicio());

    youtubeSearch(API_KEY, { q: termo })
      .then((data) => {
        dispatch(buscaVideoSucesso(data.items));
        dispatch(reproduzirVideo(data.items[0]))
      })
      .catch(() => dispatch(buscaVideoErro()));
  }
}


export default connect(null, mapDispatchToProps)(SearchBar)