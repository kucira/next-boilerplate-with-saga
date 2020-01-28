// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
// import { HomeReducer } from "./home";
import { reducer as HomeReducer} from "./HomeReducer";
// #endregion Local Imports

export default combineReducers({
    home: HomeReducer,
});
