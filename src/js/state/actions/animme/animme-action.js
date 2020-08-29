import {getEvent} from 'basePath/views/component/common/crudoperation';
import {SEARCH_ANIMME_SCUCCESS, SEARCH_ANIMME_FAILURE} from "basePath/state/actions/animme/action-types.js";

function dispatchSuccess(data, q){
    return {
        type: SEARCH_ANIMME_SCUCCESS,
        payload : {
            isLoaded:true,
            data,
            q: q
        }
    }
}

function dispatchFailure(error, q){
    return {
        type: SEARCH_ANIMME_FAILURE,
        payload : {
            isLoaded:true,
            data: error,
            q: q
        }
    }
}
export function getAnimme(q, page){
    let url = `http://localhost:9090/animmesearch?q=${q}&page=${page}`;
    return function(dispatch){
        getEvent(url)
        .then(res =>{
            if (res.status == '200' || res.status == '201') {
                return res.data.results;
            } else {
                throw Error(`Request rejected with status ${res.status}`);
            }
        })
        .then(response => {
            dispatch(dispatchSuccess(response,q));
        })
        .catch(error => {
            dispatch(dispatchFailure(error, q));
        });

    }
}