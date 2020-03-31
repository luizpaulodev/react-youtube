const initialState = {
  videos: [],
  carregando: false,
  erro: false
}

export default function buscaVideos(state = initialState, action) {
  switch(action.type) {
    case 'BUSCA_VIDEO_INICIO':
      return {
        videos: [],
        carregando: true,
        erro: false
      }

    case 'BUSCA_VIDEO_SUCESSO':
      return {
        videos: action.videos,
        carregando: false,
        erro: false
      }

    case 'BUSCA_VIDEO_ERRO':
      return {
        videos: [],
        carregando: false,
        erro: true
      }

    default:
      return state;
  }
}