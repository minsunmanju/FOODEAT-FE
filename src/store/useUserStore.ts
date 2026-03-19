import {create} from "zustand";
type UserStore = {
    foodtiNumber: number|null;
    setFoodtiNumber: (value: number) => void
}

export const useUserStore = create<UserStore>((set) =>({
    foodtiNumber: null,
    setFoodtiNumber: (value => set({foodtiNumber: value}))

}))