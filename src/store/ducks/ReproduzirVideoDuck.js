export const Types ={
  REPRODUZ_VIDEO: 'ReproduzVideo/REPRODUZ_VIDEO'
} 

const initialState = {
  video: {}
};

export default function reducer(state = initialState, action) {
  if(action.type === Types.REPRODUZ_VIDEO) {
    return {
      video: action.video
    }
  }

  return state;
}

export const reproduzirVideo = video => ({
  type: Types.REPRODUZ_VIDEO,
  video
})
 