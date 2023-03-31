import React, { FC, useEffect } from "react";
import { OfferList } from "../components/OfferList";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Home: FC = () => {
    const { fetchOffersPart } = useActions();
    const { indexedData, isLoading, isAllLoaded } = useTypedSelector(
        (state) => state.offer
    );

    useEffect(() => {
        if (!isAllLoaded) {
            fetchOffersPart();
        }
    }, []);

    if (isLoading) {
        return <h1>Идет загрузка...</h1>;
    }

    return (
        <div className='homePageCont'>
            <OfferList data={indexedData} />
        </div>
    );
};
export { Home };
