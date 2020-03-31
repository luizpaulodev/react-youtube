const initialState = {
  video: {}
};

export default function reproduzVideo(state = initialState, action) {
  if(action.type === 'REPRODUZ_VIDEO') {
    return {
      video: action.video
    }
  }

  return state;
}