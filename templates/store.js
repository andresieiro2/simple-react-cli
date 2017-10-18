var actions = function() {
  return '' +
    "import * as types from './actionTypes';\n" +
    "//import * as ServicesSample from './../../services/sample';\n\n" +

    "export const sampleAction = (data) => ({\n" +
    " type: types.ACTION_SAMPLE,\n" +
    " data\n" +
    "});\n\n" +

    "export const sampleActionService = () => (dispatch, getState) => {\n" +
    " //ServicesSample.get()\n" +
    " //.then( result => dispatch(sampleAction(result)) )\n" +
    " //.catch( error => console.log(error));\n" +
    "};";
}

var actionTypes = function() {
  return "export const ACTION_SAMPLE = 'ACTION_SAMPLE';";
}

var reducer = function() {
  return "" +
  "import * as types from './actionTypes';\n\n"+
  "const initialState = {\n"+
  " entry: null,]\n"+
  "};\n\n"+
  "export default function reduce(state = initialState, action = {}) {\n" +
  " switch (action.type) {\n" +
  "   case types.ACTION_SAMPLE:\n" +
  "     return  {\n" +
  "        ...state,\n" +
  "        entry: action.data\n" +
  "      }\n" +
  "    default:\n" +
  "      return state;\n" +
  "  }\n" +
  "}" ;
}

var selectors = function() {
  return "export const getData = state => state.myCustomReducer.entry;";
}

module.exports = {
  actions,
  actionTypes,
  reducer,
  selectors
}
