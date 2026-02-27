import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const MapBottomSheetListButton = () => {
    return (
        <div className='flex gap-2'>
            <div><RxHamburgerMenu/></div>
            <div>목록 보기</div>
        </div>
    );
};

export default MapBottomSheetListButton;