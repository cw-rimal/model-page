import { createStore } from 'redux';
import Cities from "../data/city.json";
import Versions from "../data/version.json";
import ModelDetails from '../data/model.json';

const stateObj = {
    cityList: Cities.cityList,
    modelDetails: ModelDetails,
    versions: Versions.versionList,
    location: {
        id: 0,
        name: "",
        stateId: 0,
        stateName: ""
    },
    version: Versions.versionList[0]
}

const reducer = (state = stateObj, action) => {
    switch (action.type) {
        case "versionChange":
                return {
                    ...state,
                    version: state.versions.find(v => v.id === action.versionId)
                };
        case "locationChange":
            return { 
                ...state,
                location: state.cityList.find(c => c.id === action.cityId)
            };
        default:
            return state;
    }
    
}

const store = createStore(reducer);

export default store;