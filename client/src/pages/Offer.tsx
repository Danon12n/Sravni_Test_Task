import { FC } from "react";
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface OfferProps {
}

const Offer: FC<OfferProps> = ({ }) => {
    const { id } = useParams();

    const offer = useTypedSelector(state => state.offer.data[id ? parseInt(id) : 0]);



    return (
        <div>
            <img src={offer.organization.logo} alt="logo" />
            <p>Организация: {offer.organization.name}</p>
            <b>
                {offer.rate.periods[0].rate.from === offer.rate.periods[0].rate.to
                    ? `${offer.rate.periods[0].rate.from}%`
                    : `от ${offer.rate.periods[0].rate.from}%`}
            </b>
            <div className="subTitle">
                «{offer.name}»
            </div>
            <div className="money">
                <b>
                    {offer.rate.creditAmount.to
                        ? `${offer.rate.creditAmount.from.toLocaleString()} ₽ - ${offer.rate.creditAmount.to.toLocaleString()} ₽`
                        : `от ${offer.rate.creditAmount.from.toLocaleString()} ₽`}
                </b>
            </div>
            <div className="subTitle">На срок до {offer.rate.periods[0].term.to / 12} лет</div>
            <div className="subTitle">В возрасте от {offer.customerRequirements.age} лет</div>
            <div className="subTitle">{offer.customerRequirements.documents} документа</div>
            <div className="subTitle">лиц. №{offer.organization.license}</div>
        </div>
    )
}
export { Offer };