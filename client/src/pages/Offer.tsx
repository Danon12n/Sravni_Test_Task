import { FC } from "react";
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import '../styles/OfferStyle.scss'

interface OfferProps {
}

const Offer: FC<OfferProps> = ({ }) => {
    const { id } = useParams();
    const offer = useTypedSelector(state => state.offer.data[id ? parseInt(id) : 0]);

    if (!offer) {
        return <h1>Такого предложения нет, либо не был получен с сервера!</h1>
    }
    return (
        <div className="cont">
            <div className="row row_gray">
                <img className="mb" src={offer.organization.logo} alt="logo" />
            </div>
            <div className="row row_white">
                <p>Организация: {offer.organization.name}</p>
                <div className="subTitle">Лицензия: №{offer.organization.license}</div>
            </div>
            <div className="row row_gray">
                <b>Ставка:
                    {offer.rate.periods[0].rate.from === offer.rate.periods[0].rate.to
                        ? ` ${offer.rate.periods[0].rate.from}%`
                        : ` от ${offer.rate.periods[0].rate.from}%`}
                </b>
                <div className="subTitle">
                    Программа: «{offer.name}»
                </div>
            </div>
            <div className="row row_white">
                <div className="money">
                    <b>Сумма:
                        {offer.rate.creditAmount.to
                            ? ` ${offer.rate.creditAmount.from.toLocaleString()} ₽ - ${offer.rate.creditAmount.to.toLocaleString()} ₽`
                            : ` от ${offer.rate.creditAmount.from.toLocaleString()} ₽`}
                    </b>
                </div>
                <div className="subTitle">На срок до {offer.rate.periods[0].term.to / 12} лет</div>
            </div>
            <div className="row row_gray">
                <p className="subTitle">В возрасте от {offer.customerRequirements.age} лет</p>
                <p className="subTitle">{offer.customerRequirements.documents} документа</p>
            </div>
        </div>
    )
}
export { Offer };