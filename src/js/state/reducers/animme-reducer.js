import {SEARCH_ANIMME_SCUCCESS, SEARCH_ANIMME_FAILURE} from "basePath/state/actions/animme/action-types.js";

const initialState = {
    data : {},
    isLoaded: false,
    q: ''
};

function AnimmeReducer(state = initialState , {type,payload}){
    let data = state;
    switch (type) {
        case SEARCH_ANIMME_SCUCCESS:
            if(state.q == payload.q){
                payload.data = [...state.data, ...payload.data];
            }
            data = Object.assign({},state,{...payload});
            break;

        case SEARCH_ANIMME_FAILURE:
            data = Object.assign({},state,{...payload});
            break;
        default:
            break;
    }
    return data;
}

export default AnimmeReducer;