import React from 'react';
import { Header } from '../../../components/Header';
import MapBasePage from './MapBasePage';
import MapBottomSheet from '../components/bottomsheet/MapBottomSheet';

const MapPage = () => {
    return (
        <div>
            <Header title='지도' goBack/>
            <MapBasePage/>
            <MapBottomSheet/>
        </div>
    );
};

export default MapPage;