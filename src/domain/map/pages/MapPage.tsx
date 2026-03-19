import React, { cloneElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from '../../../components/Header';
import MapBasePage from './MapBasePage';
import MapBottomSheet from '../components/bottomsheet/MapBottomSheet';
import { useSignUpStore } from '../../../store/useSignUpStore';
import { useGetMapDiary } from '../components/bottomsheet/hooks/useGetMapDiary';

const MapPage = () => {

    const {form} = useSignUpStore();
    // 다이어리를 찾을 기준(집, 현재위치)
    const [findType, setFindType] = useState<"CURRENT"|"HOME">("CURRENT")
    const [radiusKm, setRadiusKm] = useState(3);

    const [center, setCenter] = useState<{lat: number; lng: number }>({lat: 37.557477, lng: 126.996726})

    const homeLatitude = form.homeLatitude
    const homeLongitude = form.homeLongitude

    const locationLabel = useMemo(() => {
        return findType === "CURRENT" ? "현재 위치" : "집"
    },[findType])

    const moveToCurrentLocation = useCallback(() => {
        if(!navigator.geolocation) return 

        navigator.geolocation.getCurrentPosition((pos) => {
            setCenter({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
            setFindType("CURRENT")
        },
        () => {
            if(homeLatitude && homeLongitude){
                setCenter({
                    lat: homeLatitude,
                    lng: homeLongitude
                })
                setFindType("HOME")
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 8000
        }
    )
    },[homeLatitude, homeLongitude])

    const moveToHomeLocation = useCallback(() =>{
        if(homeLatitude && homeLongitude){
            setCenter({
                lat: homeLatitude,
                lng: homeLongitude
            })
            setFindType("HOME")
        }
    },[homeLatitude, homeLongitude])

    useEffect(() =>{
        moveToCurrentLocation()
    },[moveToCurrentLocation])

    const {data, isLoading, isError} = useGetMapDiary({
        latitude: center.lat,
        longitude: center.lng,
        radius: radiusKm
    });

    return (
        <div>
            <Header title='지도' goBack/>
            <MapBasePage center={center} radius={radiusKm * 1000} diaries={data?.diaries || []}/>
            <MapBottomSheet diaries={data?.diaries || []} isLoading={isLoading} isError={isError} locationLabel={locationLabel} radius={radiusKm} onClickCurrentLocation={moveToCurrentLocation} onClickHomeLocation={moveToHomeLocation} onChangeRadius={setRadiusKm}/>
        </div>
    );
};

export default MapPage;