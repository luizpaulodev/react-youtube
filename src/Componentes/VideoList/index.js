import VideoList from './VideoList';
import { connect } from 'react-redux';
import { reproduzVideo } from '../../store/actions/reproduz-video';

const mapDispatchToProps = dispatch => {
  return {
    reproduz: video => dispatch(reproduzVideo(video))
  }
}

const mapStateToProps = state => ({
  videos: state.busca.videos,
  carregando: state.busca.carregando,
  erro: state.busca.erro
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);