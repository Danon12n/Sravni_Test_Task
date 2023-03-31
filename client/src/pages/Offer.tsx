import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "../styles/OfferStyle.scss";

const Offer: FC = () => {
    const { id } = useParams();

    const new_data = useTypedSelector((state) => state.offer.indexedData);
    const offer = new_data.find((el) => {
        if (id) {
            if (el.id === parseInt(id)) return el.data;
        }
    });

    if (!offer) {
        return <h1>Такого предложения нет, либо не был получен с сервера!</h1>;
    }
    return (
        <div className='cont'>
            <div className='row row_gray'>
                <img
                    className='mb'
                    src={offer.data.organization.logo}
                    alt='logo'
                />
            </div>
            <div className='row row_white'>
                <p>Организация: {offer.data.organization.name}</p>
                <div className='subTitle'>
                    Лицензия: №{offer.data.organization.license}
                </div>
            </div>
            <div className='row row_gray'>
                <b>
                    Ставка:
                    {offer.data.rate.periods[0].rate.from ===
                    offer.data.rate.periods[0].rate.to
                        ? ` ${offer.data.rate.periods[0].rate.from}%`
                        : ` от ${offer.data.rate.periods[0].rate.from}%`}
                </b>
                <div className='subTitle'>Программа: «{offer.data.name}»</div>
            </div>
            <div className='row row_white'>
                <div className='money'>
                    <b>
                        Сумма:
                        {offer.data.rate.creditAmount.to
                            ? ` ${offer.data.rate.creditAmount.from.toLocaleString()} ₽ - ${offer.data.rate.creditAmount.to.toLocaleString()} ₽`
                            : ` от ${offer.data.rate.creditAmount.from.toLocaleString()} ₽`}
                    </b>
                </div>
                <div className='subTitle'>
                    На срок до {offer.data.rate.periods[0].term.to / 12} лет
                </div>
            </div>
            <div className='row row_gray'>
                <p className='subTitle'>
                    В возрасте от {offer.data.customerRequirements.age} лет
                </p>
                <p className='subTitle'>
                    {offer.data.customerRequirements.documents} документа
                </p>
            </div>
        </div>
    );
};
export { Offer };
