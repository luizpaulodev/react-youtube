import VideoList from './VideoList';
import { connect } from 'react-redux';
import { reproduzirVideo } from '../../store/ducks/ReproduzirVideoDuck';

const mapDispatchToProps = dispatch => {
  return {
    reproduz: video => dispatch(reproduzirVideo(video))
  }
}

const mapStateToProps = state => {
  return ({
    videos: state.busca.videos,
    carregando: state.busca.carregando,
    erro: state.busca.erro
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);