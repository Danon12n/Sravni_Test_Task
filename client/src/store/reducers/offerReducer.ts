

import { type } from "os"
import { offerType } from "../../types/offerType"

interface offerState {
    data: offerType[],
    isLoading: boolean,
    isAllLoaded: boolean
}

const initialState:offerState = {
    data: [],
    isLoading: false,
    isAllLoaded: false,
}

export const enum offerActions {
    GET_ALL_OFFERS = 'GET_ALL_OFFERS',
    GET_ALL_OFFERS_SUCCESS = 'GET_ALL_OFFERS_SUCCESS',
    GET_PART_OFFERS = 'GET_PART_OFFERS',
    GET_PART_OFFERS_SUCCESS = 'GET_PART_OFFERS_SUCCESS',
    FILTER_OFFERS_BY_PRICE = 'FILTER_OFFERS_BY_PRICE',
    FILTER_OFFERS_BY_RATE = 'FILTER_OFFERS_BY_RATE',
}

interface GetAllOfferAction {
    type: offerActions.GET_ALL_OFFERS,
}
interface GetAllOfferSuccessAction {
    type: offerActions.GET_ALL_OFFERS_SUCCESS,
    payload: offerType[],
}
interface GetPartOfferAction {
    type: offerActions.GET_PART_OFFERS
}
interface GetPartOfferSuccessAction {
    type: offerActions.GET_PART_OFFERS_SUCCESS,
    payload: offerType[],
}
interface FilterOffersByPriceAction {
    type: offerActions.FILTER_OFFERS_BY_PRICE,
    payload: offerType[],
}

interface FilterOffersByRateAction {
    type: offerActions.FILTER_OFFERS_BY_RATE,
    payload: offerType[],
}

export type offerAction = 
    GetPartOfferSuccessAction | GetPartOfferAction | 
    GetAllOfferSuccessAction | GetAllOfferAction |
    FilterOffersByPriceAction | FilterOffersByRateAction;

export const offerReducer = (state = initialState, action: offerAction):offerState => {
    switch (action.type) {
        case offerActions.GET_ALL_OFFERS:
            return {...state, isLoading: true, isAllLoaded: false}
        case offerActions.GET_ALL_OFFERS_SUCCESS:
            return {data: action.payload, isLoading: false, isAllLoaded: true}
        case offerActions.GET_PART_OFFERS:
            return {...state, isLoading: true}
        case offerActions.GET_PART_OFFERS_SUCCESS:
            return {...state, data: action.payload, isLoading: false}
        case offerActions.FILTER_OFFERS_BY_PRICE:
            return {...state, data: action.payload}
        case offerActions.FILTER_OFFERS_BY_RATE:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

