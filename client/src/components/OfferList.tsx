import { FC } from "react";
import { OfferCard } from "./OfferCard";
import '../styles/HomeStyle.scss'
import { offerType } from "../types/offerType";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from '../hooks/useTypedSelector'


interface OfferListProps {
    data: offerType[]

}

const OfferList: FC<OfferListProps> = ({ data }) => {

    const isAllLoaded = useTypedSelector(state => state.offer.isAllLoaded)
    const { fetchAllOffers, FilterOffersByPrice, FilterOffersByRate } = useActions();

    return (
        <div className="listCont">
            <div className="listSort">
                Сортировать:
                <div
                    className="btn"
                    onClick={() => { FilterOffersByPrice(data) }}
                >
                    по цене
                </div>
                <div
                    className="btn"
                    onClick={() => { FilterOffersByRate(data) }}
                >
                    по ставке
                </div>
            </div>
            <div className="list">
                {data.map((el, i) => {
                    return (
                        <OfferCard key={i} id={i} offer={el} />
                    )
                })}
                {!isAllLoaded && <div
                    className="btn"
                    onClick={fetchAllOffers}
                >
                    Показать остальное
                </div>}
            </div>
        </div>
    )
}
export { OfferList };