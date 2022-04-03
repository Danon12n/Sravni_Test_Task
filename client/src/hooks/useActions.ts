import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as offerActionCreators from '../store/action-creators/offer'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(offerActionCreators, dispatch)
}