import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2182242Reducer from '../features/SignIn2182242/redux/reducers'
import SignIn2182228Reducer from '../features/SignIn2182228/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2182242: SignIn2182242Reducer,
SignIn2182228: SignIn2182228Reducer,

});