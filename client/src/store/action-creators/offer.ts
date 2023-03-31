import { Dispatch } from "redux";
import { offerActions, offerAction } from "../reducers/offerReducer";
import axios from 'axios'
import { indexedOfferType, offerType } from "../../types/offerType";


export const fetchOffersPart = () => {
    return async (dispatch: Dispatch<offerAction>) => {
        try {
            dispatch({type:offerActions.GET_PART_OFFERS})
            const response = await axios.get<offerType[]>('http://localhost:5000/api/offers?limit=10')
            const new_data = response.data.map((el, i) => { return {id: i, data:el}})
            dispatch({type:offerActions.GET_PART_OFFERS_SUCCESS, payload: new_data})
        } catch (e) {
            alert(e);
        }
    }
} 

export const fetchAllOffers = () => {
    return async (dispatch: Dispatch<offerAction>) => {
        try {
            dispatch({type:offerActions.GET_ALL_OFFERS})
            const response = await axios.get<offerType[]>('http://localhost:5000/api/offers')
            const new_data = response.data.map((el, i) => { return {id: i, data:el}})
            dispatch({type:offerActions.GET_ALL_OFFERS_SUCCESS, payload: new_data})
        } catch (e) {
            alert(e);
        }
    }
} 

export const SortOffersByPrice = (offers: indexedOfferType[]) => {
    return (dispatch : Dispatch<offerAction>) => {
        offers.sort((a,b) => {
            return (a.data.rate.creditAmount.from - b.data.rate.creditAmount.from)
        })
        dispatch({type:offerActions.SORT_OFFERS_BY_PRICE, payload:offers})
    }
}
export const SortOffersByRate = (offers: indexedOfferType[]) => {
    return (dispatch : Dispatch<offerAction>) => {
        offers.sort((a,b) => {
            return (a.data.rate.periods[0].rate.from - b.data.rate.periods[0].rate.from)
        })
        dispatch({type:offerActions.SORT_OFFERS_BY_RATE, payload:offers})
    }
}



