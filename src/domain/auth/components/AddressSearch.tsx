import React, { useEffect, useRef, useState } from "react";
import type { AddressCoordsResult } from "../../../api/kakaoLocal.api";
import { useKakaoAddressSearch } from "../hooks/useKakaoAddressSearch";
import { Input } from "../../../components/Input";

type Props = {
  onSelectCoords: (result: AddressCoordsResult) => void;
};

export default function AddressSearch({ onSelectCoords }: Props) {
  const [address, setAddress] = useState("");
  const [results, setResults] = useState<AddressCoordsResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const search = useKakaoAddressSearch();
  const skipSearchRef = useRef(false);

  useEffect(() => {
    if (skipSearchRef.current) {
      skipSearchRef.current = false;
      return;
    }

    const keyword = address.trim();

    if (!keyword) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const timer = setTimeout(() => {
      search.mutate(keyword, {
        onSuccess: (list) => {
          setResults(list);
          setShowResults(true);
        },
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [address]);

  const handleSelect = (item: AddressCoordsResult) => {
    skipSearchRef.current = true;
    setAddress(item.placeName ?? item.addressName);
    setResults([]);
    setShowResults(false);
    onSelectCoords(item);
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);

    if (!value.trim()) {
      setResults([]);
      setShowResults(false);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        color="neutral400"
        size="md"
        type="text"
        placeholder="주소를 검색하세요"
        value={address}
        onChange={handleChangeAddress}
      />

      {showResults && results.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-20 mt-2 max-h-[220px] overflow-y-auto rounded-lg border border-orange-200 bg-white shadow-md">
          {results.map((item) => (
            <li key={`${item.addressName}-${item.lat}-${item.lng}`}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className="w-full border-b border-orange-100 px-3 py-3 text-left text-sm hover:bg-orange-50 last:border-b-0"
              >
                <div className="text-neutral-900">
                  {item.placeName ?? item.addressName}
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}