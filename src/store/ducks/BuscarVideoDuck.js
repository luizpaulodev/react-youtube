export const Types = {
  BUSCA_VIDEO_INICIO: 'BuscarVideos/BUSCA_VIDEO_INICIO',
  BUSCA_VIDEO_SUCESSO: 'BuscarVideos/BUSCA_VIDEO_SUCESSO',
  BUSCA_VIDEO_ERRO: 'BuscarVideos/BUSCA_VIDEO_ERRO'
}

const initialState = {
  videos: [],
  carregando: false,
  erro: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case Types.BUSCA_VIDEO_INICIO:
      return {
        videos: [],
        carregando: true,
        erro: false
      }

    case Types.BUSCA_VIDEO_SUCESSO:
      return {
        videos: action.videos,
        carregando: false,
        erro: false
      }

    case Types.BUSCA_VIDEO_ERRO:
      return {
        videos: [],
        carregando: false,
        erro: true
      }

    default:
      return state;
  }
}

export const buscaVideoInicio = () => {
  return {
    type: Types.BUSCA_VIDEO_INICIO,
    carregando: true,
    erro: false
  }
}

export const buscaVideoSucesso = (videos) => {
  return {
    type: Types.BUSCA_VIDEO_SUCESSO,
    videos,
    carregando: false,
    erro: false
  }
}

export const buscaVideoErro = () => {
  return {
    type: Types.BUSCA_VIDEO_ERRO,
    carregando: false,
    erro: true
  }
}