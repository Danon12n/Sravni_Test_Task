import { Dispatch } from "redux";
import { offerActions, offerAction } from "../reducers/offerReducer";
import axios from 'axios'
import { offerType } from "../../types/offerType";


export const fetchOffersPart = () => {
    return async (dispatch: Dispatch<offerAction>) => {
        try {
            dispatch({type:offerActions.GET_PART_OFFERS})
            const response = await axios.get<offerType[]>('http://localhost:5000/api/offers?limit=10')
            dispatch({type:offerActions.GET_PART_OFFERS_SUCCESS, payload: response.data})
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
            dispatch({type:offerActions.GET_ALL_OFFERS_SUCCESS, payload: response.data})
        } catch (e) {
            alert(e);
        }
    }
} 

export const FilterOffersByPrice = (offers: offerType[]) => {
    return (dispatch : Dispatch<offerAction>) => {
        offers.sort((a,b) => {
            return (a.rate.creditAmount.from - b.rate.creditAmount.from)
        })
        dispatch({type:offerActions.FILTER_OFFERS_BY_PRICE, payload:offers})
    }
}
export const FilterOffersByRate = (offers: offerType[]) => {
    return (dispatch : Dispatch<offerAction>) => {
        offers.sort((a,b) => {
            return (a.rate.periods[0].rate.from - b.rate.periods[0].rate.from)
        })
        dispatch({type:offerActions.FILTER_OFFERS_BY_RATE, payload:offers})
    }
}

