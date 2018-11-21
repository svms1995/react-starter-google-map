import fetch, {Headers } from 'cross-fetch';
import 'cross-fetch/polyfill';
import 'babel-polyfill';
import 'isomorphic-fetch';

import {actions} from './root/root-action';

import store from '../store';
import Helper from './helper';

const helper = new Helper();


export function fetchApi(END_POINT , data, dispatch, state, forceUpdate) {
	
		const sectionData = state.server[END_POINT.sectionName] ? state.server[END_POINT.sectionName] : null;
		const isFile = END_POINT.file !== undefined ? END_POINT.file : false;

		/**
		 * If forceupdate is false, then checking , the data is already present in store
		 * So Skip the Server Requesting and return the Promise instance.
		 */
		if(!forceUpdate && sectionData && sectionData.response && sectionData.response.data) {
				
				// When data is in under data key, it is possible when a get request with pagination
				if(sectionData.response.data.data && sectionData.response.data.data.length) {
						return Promise.resolve(sectionData.response);
				}
				
				// When data direct in the data key.
				else if(!sectionData.response.data.data && sectionData.response.data) {
						return Promise.resolve(sectionData.response);
				}
		}

		if(!isFile && END_POINT.shouldMergeRequest !== false ) {
 
			data = { ...sectionData ? sectionData.requestData : {} , ...data };
		}
			// First dispatch: the app state is updated to inform
			// that the API call is starting.   
		 // data && data. 

			dispatch(actions.fetch.requestingToApi(END_POINT, data));
			
			// The function called by the thunk middleware can return a value,
			// that is passed on as the return value of the dispatch method.
			// In this case, we return a promise to wait for.
			// This is not required by thunk middleware, but it is convenient for us.

				var isCompleteUrl = new RegExp(/^https?\:\/\//)

				let API_URL =  END_POINT.url;

				console.log('process.env.API_URL');
				console.log(process.env.API_URL);
				console.log(process.env);

				API_URL = isCompleteUrl.test(API_URL) ?  API_URL : process.env.API_URL+API_URL;

				const sectionName = END_POINT.sectionName;
				
				const types = END_POINT.type;
				const isAuthRequire = END_POINT.auth ? END_POINT.auth : false;
				

				let headers = END_POINT.headers ? END_POINT.headers : new Headers()

				if(isAuthRequire && state.server['auth_user'] && state.server['auth_user'].response) {
						const auth_user: AuthI = state.server['auth_user'].response.data;            
						headers.append('authorization', 'Bearer ' + auth_user.token);
				}

				if(!isFile) 
				headers.append('Content-Type', 'application/json');
				
				
				let RequestBody: RequestDataType = '';
				
				// If Request does not contain the file data then convert the body into JSON
				
				RequestBody = (isFile === false ) ? JSON.stringify(data) : data;
				

				// Empty the Request Body id Method is GET
				if(END_POINT.method === 'GET'){
						
						RequestBody = '';
						if(data && Object.keys(data).length)
								API_URL += '?'+ helper.queryString(data);
				}
				

				//const RequestBody: RequestDataType = body;

				const request: RequestInit = {

						headers: headers,
						method: END_POINT.method,
						mode: END_POINT.mode,
						cache: END_POINT.cache,
						body: RequestBody,
						signal: END_POINT.signal,
					 // credentials: 'include'
				}

		 
				// request.body = Object.assign({}, request.body, data);

			END_POINT.type ? dispatch(END_POINT.type.request(END_POINT)) : null;

			return fetch(API_URL, request)
				.then(responseVerification)
				.then((response) => {

						//console.log('Received...............');
						// Dispatch the Success Action Globally for all API.
						dispatch(actions.fetch.receivedApiResponse(END_POINT, response));
						
						// Dispatch the Success Action of indivisual Api.
						
						END_POINT.type ? dispatch(END_POINT.type.success(END_POINT, response)) : null;
						return response;            

				})
				.catch( (response) => {
						
						// Dispatch the Error Action Globally for all API.
						dispatch(actions.fetch.receivedApiException(END_POINT, response));
						
						// Dispatch the Error Action of indivisual Api.
						END_POINT.type ? dispatch(END_POINT.type.fail(END_POINT, response)) : null;

						return Promise.reject(response);
				})   
	}

	/**
	 *  Verify the Server Response 
	 * @param response 
	 */
	function responseVerification(response) {
 
		if(response.headers.get('content-type').indexOf('application/json') === -1 && response.status >= 200 && response.status < 300) {
		
				return response.blob();
		}

		if (response.status && response.status >= 200 && response.status < 300) {                          

				return  response.json().then((response) => {
						
						return response.status ? Promise.resolve(response) : Promise.reject(response);                
				});
		}

		else if(response.status === 401 ){
				
				// LogOut the User        
				return response.json().then((data) => {

						store.dispatch(actions.auth.logoutSuccess(API.AUTH_USER, data));
						return Promise.reject(data);
				});
		}
		 else {      

				return response.json().then((data) => {

						return Promise.reject(data);
				});
		}
}