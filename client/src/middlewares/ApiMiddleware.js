import {RootAction, actions} from '../features/root/root-action';
import {RootState} from '../features/root/root-reducer';
import {ListRequest} from '../features/root/root-props';
import {InitialListRequest} from '../features/fetch/reducer';
import { fetchApi } from '../features/fetch';
import { Store } from 'redux';
//import * as  fetchAction from '../features/fetch/action';
import fetchConst from '../features/fetch/constant';

export default (store) => (next) => (action) => {


    /**
     * When Requesting to server
     */
    if( action.type === fetchConst.CALL_API) {

        const END_POINT = action.payload.END_POINT;
        const data = action.payload.data;
        const forceUpdate = action.payload.forceUpdate;
        return fetchApi(END_POINT, data, store.dispatch, store.getState(), forceUpdate);
    }   

    /**
     * When requesting to server
     */
    if(action.type === fetchConst.REQUESTING_API) {
        //store.dispatch(actions.loadBar.show());
        //throw new SubmissionError({...action.payload.data.errors, _error: action.payload.data.message}); 
    }

    /**
     * When get any success during the Request
     */
    if(action.type === fetchConst.RECEIVED_API_RESPONSE) {
        //store.dispatch(actions.loadBar.hide());
        //throw new SubmissionError({...action.payload.data.errors, _error: action.payload.data.message}); 
    }

    /**
     * When get any exception during the Request
     */
    if(action.type === fetchConst.RECEIVED_APT_EXCEPTION ) {
        //store.dispatch(actions.loadBar.hide());
        // const errors = action.payload.data.errors ? action.payload.data.errors : {};
        // const message = action.payload.data.message ? action.payload.data.message : '';
        // throw new SubmissionError({...errors, _error: message}); 
    }

    //if(action.type === AUTH_SUCCESS) 

    return  next(action);
}