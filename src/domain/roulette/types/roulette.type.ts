export type RouletteMenu = {
    menuId: number;
    name: string;
    category: string
}
export type RouletteResponse = {
    foodtiNumber: number ;
    menus: RouletteMenu[]
}