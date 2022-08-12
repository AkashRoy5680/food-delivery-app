import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo=fetchUser();
const cartInfo=fetchCart();

export const inititalState={
    user:userInfo,
    foodItems:null,
    cartShow:false,
    cartItems:cartInfo
}