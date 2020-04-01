import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  video: state.reproduz.video
});

export default connect(mapStateToProps, null)(VideoPlayer);