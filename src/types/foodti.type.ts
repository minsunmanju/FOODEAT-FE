export type SubmitFoodtiPayload = {
    answers : string[]
}

export type FoodMenu = {
    menuId: number;
    name: string;
    category: string
}

export type FoodtiResponse = {
    foodtiNumber: number;
    foodtiCode: string;
    recommendedMenus:FoodMenu[]

}