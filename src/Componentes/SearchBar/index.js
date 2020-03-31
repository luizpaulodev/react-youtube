import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { buscaVideo } from '../../store/actions/busca-video';

const mapDispatchToProps = dispatch => {
  return {
    buscaVideo: (termo) => dispatch(buscaVideo(termo))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)