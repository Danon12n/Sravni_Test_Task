import { FC, SetStateAction, useState } from "react";
import { OfferCard } from "./OfferCard";
import '../styles/HomeStyle.scss'
import { indexedOfferType, offerType } from "../types/offerType";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Banks, Durations } from './data/OfferListData';

interface OfferListProps {
    data: indexedOfferType[]
}

const OfferList: FC<OfferListProps> = ({ data }) => {

    let new_data: indexedOfferType[] = data.slice();

    const isAllLoaded = useTypedSelector(state => state.offer.isAllLoaded)
    const { fetchAllOffers, SortOffersByPrice, SortOffersByRate } = useActions();
    const [BankName, setBankName] = useState("Любое");
    const [duration, setDuration] = useState("Любое");
    const [selectors, setSelectors] = useState([false, false]);

    console.log(parseInt(duration));
    console.log(new_data);



    function updateSelector(i: number) {
        let arr = [false, false];
        let index = selectors.indexOf(true);
        if (index === -1) {
            arr[i] = !arr[i];

        }
        else {
            if (index !== i) {
                arr[i] = true;
            }
        }
        setSelectors(arr);
    }


    function changeBankName(name: string) {
        setBankName(name);
    }
    function changeDuration(name: string) {
        setDuration(name)
    }

    if (BankName !== "Любое") {
        new_data = new_data.filter((el, i) => {
            if (el.data.organization.name === BankName)
                return el;
        })
    }

    if (duration !== "Любое") {
        new_data = new_data.filter((el, i) => {
            if (el.data.rate.periods[0].term.to / 12 <= parseInt(duration))
                return el
        })
    }



    return (
        <div className="listCont">
            <div className="listFilter">
                <div className="filterSelectWrapper">
                    <div className="label mb">Банк:</div>
                    <div className="filterSelect" onClick={() => { updateSelector(0) }}>

                        <div className="text">{BankName}</div>
                        <div>
                            <svg className={selectors[0] ? "arrow arrow-bottom" : "arrow arrow-top"} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                        {selectors[0] && <div className="options">
                            {Banks.map((el, i) => {
                                return (
                                    <p
                                        key={i}
                                        onClick={() => { changeBankName(el); updateSelector(0) }}
                                        className="option">{el}</p>)
                            })}
                        </div>}
                    </div>
                </div>
                <div className="filterSelectWrapper">
                    <div className="label mb">Срок до:</div>
                    <div className="filterSelect" onClick={() => { updateSelector(1) }}>
                        <div className="text">{duration}</div>
                        <div>
                            <svg className={selectors[1] ? "arrow arrow-bottom" : "arrow arrow-top"} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                        {selectors[1] && <div className="options">
                            {Durations.map((el, i) => {
                                return <p key={i} onClick={() => { changeDuration(el); updateSelector(1) }} className="option">{el}</p>
                            })}
                        </div>}
                    </div>
                </div>

            </div>
            <div className="listSort">
                Сортировать:
                <div
                    className="btn ml"
                    onClick={() => { SortOffersByPrice(data) }}
                >
                    по цене
                </div>
                <div
                    className="btn ml"
                    onClick={() => { SortOffersByRate(data) }}
                >
                    по ставке
                </div>
            </div>
            <div className="list">
                {new_data.map((el, i) => {
                    return (
                        <OfferCard key={i} id={el.id} offer={el.data} />
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