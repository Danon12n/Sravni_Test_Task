import {combineReducers} from 'redux';
import { offerReducer } from './offerReducer';


export const rootReducer = combineReducers({
    offer: offerReducer
})

export type RootState = ReturnType<typeof rootReducer>
