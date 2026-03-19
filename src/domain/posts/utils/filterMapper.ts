import type { DiaryPriceRangeType, DiaryRatingType } from "../../../types/post.type";
import type { PriceOption } from "../components/PriceSelect";
import type { RatingOption } from "../components/RatingSelect";

export function mapPriceOptionToParam(price: PriceOption) : DiaryPriceRangeType {
    switch (price) {
        case "1만원 이하":
            return 1;
        case "1~2만원":
            return 2 ;
        case "3만원 이상":
            return 3;
        default :
        return null
    }
}

export function mapRatingOptionToParam(rating: RatingOption) : DiaryRatingType {
    switch (rating) {
        case "1점" :
            return 1
        case "2점":
            return 2
        case "3점" : 
            return 3
        case "4점":
            return 4
        case "5점" :
            return 5
        default :
            return null
    }
}