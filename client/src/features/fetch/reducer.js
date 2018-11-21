
import fetchType from './constant';

/**
 * Fetch Reducer
 */

 export const InitialListRequest = {

    page: 0,
    sizePerPage: 25,
    searchdata: undefined,
    filters: null,
    sortOrder: undefined,
}

export const  InitialResponse  ={

    isFetching: false,
    response: null,
    lastUpdated: Date.now(),
    shouldUpdate: false,
    requestData: InitialListRequest
}


export const reducer = (state, action) => {        

    const key = action.payload && action.payload.END_POINT ? action.payload.END_POINT.sectionName : '';

    switch (action.type) {
        case fetchType.REQUESTING_API:
        case fetchType.RECEIVED_API_RESPONSE:
        case fetchType.RECEIVED_APT_EXCEPTION:
        case fetchType.CALL_API:
           
            return Object.assign({}, state, {
                [key] : serverData(state[key] , action)
            })

      default:
        return state ? state :{};
    }
}

/**
 * Saving the Request data into the list.
 * @param state 
 * @param action 
 */
function saveListRequest(state = InitialResponse, data) {
   
   return {...state.requestData, ...(data ? data  : InitialListRequest) } ;    
}

/**
 * Store Server data in the individual data key
 */

function serverData (state = InitialResponse, action ) {

    switch (action.type) {
       case fetchType.REQUESTING_API: 
            
            var shouldResponseStore = action.payload.END_POINT.shouldResponseStore;
            shouldResponseStore = shouldResponseStore !== undefined ? shouldResponseStore : true;
            
            if(shouldResponseStore) {
                return Object.assign({}, state, {
                    isFetching: true,
                    shouldUpdate: !state.shouldUpdate,
                    requestData: action.payload.END_POINT.saveRequest ? saveListRequest(state, action.payload.data ) :{}
                });
            }
            else {

                 return state;   
            }

        case fetchType.RECEIVED_API_RESPONSE: 
            var shouldResponseStore = action.payload.END_POINT.shouldResponseStore;
            shouldResponseStore = shouldResponseStore !== undefined ? shouldResponseStore : true;
            
            if(shouldResponseStore) {

                return Object.assign({}, state, {
                    isFetching: false,
                    shouldUpdate: !state.shouldUpdate,
                    response: action.payload.data
                });
            }
            else {

                return state;
            }
        case fetchType.RECEIVED_APT_EXCEPTION: 
            return Object.assign({}, state, {
                isFetching: false,
                shouldUpdate: !state.shouldUpdate
            });
        
       default: 
            return state;
    }
}
