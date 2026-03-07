import axios from "axios";

const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY as string;

type KakaoAddressDoc = {
  place_name: string;
  road_address_name: string;
  address_name: string;
  x: string;
  y: string;
};

type KakaoAddressResponse = {
  documents: KakaoAddressDoc[];
};

export type AddressCoordsResult = {
  addressName?: string | undefined;
  lat: number;
  lng: number;
};

export async function fetchKeywordList(
  query: string,
): Promise<AddressCoordsResult[]> {
  const { data } = await axios.get<KakaoAddressResponse>(
    "https://dapi.kakao.com/v2/local/search/keyword.json",
    {
      params: { query },
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
      },
    },
  );
  return (data.documents ?? []).map((d) => ({
    addressName: d.place_name || d.address_name ||  d.road_address_name ,
    lat: Number(d.y),
    lng: Number(d.x),
  }));
}
