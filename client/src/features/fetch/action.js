//import { createAction } from 'redux-actions';
import CONST from './constant';

/**
 * This Action will dispatch everytime before call the api
 */

export function requestingToApi(END_POINT, data) {
	
	return {
        type: CONST.REQUESTING_API,
        payload: {
            data: data,
            END_POINT: END_POINT
        }
    }
}
/**
 * This Action will dispatch after getting the response.
 */
export function  receivedApiResponse(END_POINT, json ) {    
    
    if(typeof END_POINT.extendResponse === 'function') {

      let response = END_POINT.extendResponse(json);
      json = response ? response : json;
    }

    return {
        type: CONST.RECEIVED_API_RESPONSE,        
        payload: {
            END_POINT: END_POINT,
            data: json
        }
    }
}
/**
 * This action will dispatch to call the api.
 */

export function  callApi(END_POINT, data, forceUpdate) {

    return  {
        type: CONST.CALL_API,
        payload: {
            data: data,
            END_POINT: END_POINT,
            forceUpdate: forceUpdate !== undefined? forceUpdate : true,
        }
     }
}
/**
 * This Action will dispatch when get the any expection from the server.
 */
export function receivedApiException(END_POINT, data ) {
    return  {
        type: CONST.RECEIVED_APT_EXCEPTION,
        payload: {
            data: data,
            END_POINT: END_POINT
        }
     }
}
