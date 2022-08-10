import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo=fetchUser();
export const inititalState={
    user:userInfo,
    foodItems:null,
}