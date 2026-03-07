import { useMutation } from "@tanstack/react-query";
import { type AddressCoordsResult, fetchKeywordList} from "../../../api/kakaoLocal.api";

export function useKakaoAddressSearch() {
 return useMutation<AddressCoordsResult[],Error,string>({
    mutationFn: (query) => fetchKeywordList(query)
 })
}
