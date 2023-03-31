import { indexedOfferType } from "../../types/offerType";

interface offerState {
    indexedData: indexedOfferType[];
    isLoading: boolean;
    isAllLoaded: boolean;
}

const initialState: offerState = {
    indexedData: [],
    isLoading: false,
    isAllLoaded: false,
};

export const enum offerActions {
    GET_ALL_OFFERS = "GET_ALL_OFFERS",
    GET_ALL_OFFERS_SUCCESS = "GET_ALL_OFFERS_SUCCESS",
    GET_PART_OFFERS = "GET_PART_OFFERS",
    GET_PART_OFFERS_SUCCESS = "GET_PART_OFFERS_SUCCESS",
    SORT_OFFERS_BY_PRICE = "SORT_OFFERS_BY_PRICE",
    SORT_OFFERS_BY_RATE = "SORT_OFFERS_BY_RATE",
}

interface GetAllOfferAction {
    type: offerActions.GET_ALL_OFFERS;
}
interface GetAllOfferSuccessAction {
    type: offerActions.GET_ALL_OFFERS_SUCCESS;
    payload: indexedOfferType[];
}
interface GetPartOfferAction {
    type: offerActions.GET_PART_OFFERS;
}
interface GetPartOfferSuccessAction {
    type: offerActions.GET_PART_OFFERS_SUCCESS;
    payload: indexedOfferType[];
}
interface SortOffersByPriceAction {
    type: offerActions.SORT_OFFERS_BY_PRICE;
    payload: indexedOfferType[];
}

interface SortOffersByRateAction {
    type: offerActions.SORT_OFFERS_BY_RATE;
    payload: indexedOfferType[];
}

export type offerAction =
    | GetPartOfferSuccessAction
    | GetPartOfferAction
    | GetAllOfferSuccessAction
    | GetAllOfferAction
    | SortOffersByPriceAction
    | SortOffersByRateAction;

export const offerReducer = (
    state = initialState,
    action: offerAction
): offerState => {
    switch (action.type) {
        case offerActions.GET_ALL_OFFERS:
            return { ...state, isLoading: true, isAllLoaded: false };
        case offerActions.GET_ALL_OFFERS_SUCCESS:
            return {
                indexedData: action.payload,
                isLoading: false,
                isAllLoaded: true,
            };
        case offerActions.GET_PART_OFFERS:
            return { ...state, isLoading: true };
        case offerActions.GET_PART_OFFERS_SUCCESS:
            return { ...state, indexedData: action.payload, isLoading: false };
        case offerActions.SORT_OFFERS_BY_PRICE:
            return { ...state, indexedData: action.payload };
        case offerActions.SORT_OFFERS_BY_RATE:
            return { ...state, indexedData: action.payload };
        default:
            return state;
    }
};
