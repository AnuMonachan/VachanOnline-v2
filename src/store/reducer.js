import * as actions from "./actions";
const defaultState = {
  versions: [],
  commentaries: [],
  commentary: {},
  dictionary: {
    dictionaries: [],
    selectedDictionary: {},
    dictionaryIndex: [],
    dictionaryWord: {},
    wordMeaning: {}
  },
  versionBooks: {},
  parallelScroll: true,
  panel1: {
    version: "Loading...",
    sourceId: "",
    bookList: [],
    book: "Loading...",
    bookCode: "",
    chapter: "",
    fontSize: 16,
    fontFamily: "Sans"
  },
  panel2: {
    version: "Loading...",
    sourceId: "",
    bookList: [],
    book: "Loading...",
    bookCode: "",
    chapter: "",
    fontSize: 16,
    fontFamily: "Sans"
  }
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SETVERSIONS:
      return {
        ...state,
        versions: action.value
      };
    case actions.ADDVERSIONBOOKS:
      return {
        ...state,
        versionBooks: { ...state.versionBooks, [action.name]: action.value }
      };
    case actions.SETVALUE1:
      return {
        ...state,
        panel1: { ...state.panel1, [action.name]: action.value }
      };
    case actions.SETVALUE2:
      return {
        ...state,
        panel2: { ...state.panel2, [action.name]: action.value }
      };
    case actions.COPYPANEL1:
      return {
        ...state,
        panel2: { ...state.panel1 }
      };
    case actions.SETVALUE:
      return {
        ...state,
        [action.name]: action.value
      };
    case actions.SETDICTIONARY:
      return {
        ...state,
        dictionary: { ...state.dictionary, [action.name]: action.value }
      };
    default:
      return state;
  }
};
export default reducer;
