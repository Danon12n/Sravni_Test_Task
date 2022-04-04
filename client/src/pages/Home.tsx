import { FC, useEffect } from "react";
import { useSelector } from 'react-redux'
import { OfferList } from '../components/OfferList'
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { offerType } from "../types/offerType";
interface HomeProps {
}

const Home: FC<HomeProps> = ({ }) => {

    const { fetchOffersPart } = useActions();
    const { indexedData, isLoading, isAllLoaded } = useTypedSelector(state => state.offer)

    useEffect(() => {
        if (!isAllLoaded) {
            fetchOffersPart();
        }
    }, [])

    if (isLoading) {
        return <h1>Идет загрузка...</h1>
    }

    return (
        <div className="homePageCont">
            <OfferList data={indexedData} />
        </div>
    )
}
export { Home };