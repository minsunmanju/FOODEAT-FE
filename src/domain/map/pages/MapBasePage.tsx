import React, { useRef } from "react";
import { Map, MapMarker, useKakaoLoader, Circle } from "react-kakao-maps-sdk";
import type { MapDiaryList } from "../types/map.type";

type Center = {
  lat: number;
  lng: number
}

type Props = {
  center: Center;
  radius: number;
  diaries: MapDiaryList[]
}

const MapBasePage = ({center, radius, diaries}: Props) => {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
  });

  if (loading) return <div>지도 로딩 중 ...</div>;
  if (error) return <div>지도 로드 실패</div>;

  
  

  return (
    <div className="fixed w-[390px] left-0 right-0 my-0 mx-auto h-dvh ">
      
      <Map
        center={center}
        style={{ width: "100%", height: "100%" }}
        level={6}
        draggable
        zoomable
        className="pointer-events-auto"
        onCreate={(map) => {mapRef.current = map}}
      >

        <MapMarker
        position={center}/>


        <Circle
        center={center}
        radius={radius}
        strokeWeight={2}
        strokeColor="red"
        fillColor="red"
        fillOpacity={0.2}/>

        {diaries.map((diary) =>(
          <MapMarker
          key={diary.diaryId}
          position={{lat: diary.latitude, lng: diary.longitude}}
          title={diary.restaurantName}/>
        ))}
      </Map>
    </div>
  );
};

export default MapBasePage;
