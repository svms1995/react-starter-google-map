import { History } from 'history';
import { Dispatch} from 'react-redux';
import {actions} from './root-action';
import {RootState} from './root-reducer';
import { callApi } from '../fetch/action';
import { Location as locationState} from 'history';
import Helper from '../helper';

/**
 * Inject the state into to Props
 * @param state RootState
 * @param props Root Props
 */
export function mapStateToProps(state, props) {
    
    return {
      ...props,
      rootState: state,
      params: () => { return params(state.router.location) }
    }
}

/**
 * Inject the action into props
 * @param dispatch 
 */
export function mapDispatchToProps(dispatch) { 
    return {
      helper: new Helper(),
      dispatch,
      callApi: (END_POINT, data, forceUpdate ) =>  dispatch(actions.fetch.callApi(END_POINT, data, forceUpdate)),
    }
}

/**
 * Split the Url from the slash
 * @param location 
 */
export const params = (location) => {

    const pathName = location ? location.pathname : '';
    return pathName.split('/');
}
