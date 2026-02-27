import React, { useRef } from "react";
import { Map, MapMarker, useKakaoLoader, Circle } from "react-kakao-maps-sdk";
const MapBasePage = () => {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
  });

  if (loading) return <div>지도 로딩 중 ...</div>;
  if (error) return <div>지도 로드 실패</div>;

  return (
    <div className="fixed w-[390px] left-0 right-0 my-0 mx-auto h-dvh ">
      
      <Map
        center={{ lat: 37.5665, lng: 126.978 }}
        style={{ width: "100%", height: "100%" }}
        level={3}
        draggable
        zoomable
        className="pointer-events-auto"
      >
        <MapMarker position={{ lat: 37.5665, lng: 126.978 }} />
      </Map>
    </div>
  );
};

export default MapBasePage;
