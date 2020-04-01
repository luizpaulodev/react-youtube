import { combineReducers } from 'redux';

import busca from './BuscarVideoDuck';
import reproduz from './ReproduzirVideoDuck';

const rootReducer = combineReducers({
  busca,
  reproduz
});

export default rootReducer;