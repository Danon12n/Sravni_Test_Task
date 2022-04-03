import { FC } from "react";
import { offerType } from '../types/offerType';
import { NavLink } from 'react-router-dom';
import '../styles/HomeStyle.scss'
interface OfferCardProps {
    offer: offerType,
    id: number
}



const OfferCard: FC<OfferCardProps> = ({ id, offer }) => {
    return (
        <div className="card">
            <div className="card__column">
                <img className="logo" src={offer.organization.logo} alt="logo" />
            </div>
            <div className="card__column">
                <div className="rate">
                    <b>
                        {offer.rate.periods[0].rate.from === offer.rate.periods[0].rate.to
                            ? `${offer.rate.periods[0].rate.from}%`
                            : `от ${offer.rate.periods[0].rate.from}%`}
                    </b>
                </div>
                <div className="subTitle">
                    «{offer.name}»
                </div>
            </div>
            <div className="card__column">
                <div className="money">
                    <b>
                        {offer.rate.creditAmount.to
                            ? `${offer.rate.creditAmount.from.toLocaleString()} ₽ - ${offer.rate.creditAmount.to.toLocaleString()} ₽`
                            : `от ${offer.rate.creditAmount.from.toLocaleString()} ₽`}
                    </b>
                </div>
                <div className="subTitle">На срок до {offer.rate.periods[0].term.to / 12} лет</div>
            </div>
            <div className="card__column">
                <div className="subTitle">В возрасте от {offer.customerRequirements.age} лет</div>
                <div className="subTitle">{offer.customerRequirements.documents} документа</div>
            </div>
            <div className="card__column">
                <div className="subTitle">лиц. №{offer.organization.license}</div>
                <NavLink
                    className="btn"
                    to={`/offer/${id}`}
                >
                    Подробнее
                </NavLink>
            </div>
        </div>
    )

}
export { OfferCard };
