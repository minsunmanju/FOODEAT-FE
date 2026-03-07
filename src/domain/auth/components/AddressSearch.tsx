import React, { useState } from "react";
import type { AddressCoordsResult } from "../../../api/kakaoLocal.api";
import { useKakaoAddressSearch } from "../hooks/useKakaoAddressSearch";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

type Props = {
  onSelectCoords: (result: AddressCoordsResult) => void;
};

export default function AddressSearh({
  onSelectCoords,
}: Props) {
  const [address, setAddress] = useState("");
  const search = useKakaoAddressSearch();

  const [results, setResults] = useState<AddressCoordsResult[]>([]);
  const [selected, setSelected] = useState<AddressCoordsResult | null>(null);
  const handleSearch = () => {
    if (!address.trim()) return;

    search.mutate(address, {
      onSuccess: (list) => {
        console.log("kakao list", list)
        setResults(list);
        setSelected(null);
      },
    });
  };

  const handleSelect = (item: AddressCoordsResult) => {
    setSelected(item);
    onSelectCoords(item);
    // onChangeAddress(item.addressName);
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <Input
            color="neutral400"
            size="sm"
            type="text"
            placeholder="주소를 검색하세요"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <Button
          color="orange200"
          size="small"
          text="text"
          type="button"
          onClick={handleSearch}
        >
          {search.isPending ? "검색중" : "검색"}
        </Button>
      </div>
      {search.isSuccess && (
        <div className="mt-3">
          {results.length === 0 ? (
            <p>검색 결과가 없어요. 주소를 다시 확인해 주세요</p>
          ) : (
            <>
              <ul className="max-h-[220px] overflow-y-auto rounded-lg border border-orange-200 bg-white">
                {results.map((item) => {
                  const isActive =
                    selected?.addressName === item.addressName &&
                    selected?.lat === item.lat &&
                    selected?.lng === item.lng;

                  return (
                    <li key={`${item.addressName}-${item.lat}-${item.lng}`}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item)}
                        className={[
                          "w-full px-3 py-3 text-left text-sm",
                          "border-b border-orange-100 last:border-b-0",
                          "hover:bg-orange-50",
                          isActive ? "bg-orange-100 font-medium" : "bg-white",
                        ].join(" ")}
                      >
                        <div className="text-neutral-900">
                          {item.addressName}
                        </div>
                        <div className="mt-1 text-xs text-neutral-400">
                          lat {item.lat}, lng {item.lng}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
