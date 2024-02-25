import { BUY_CAKE } from "./cakeTypes";

// action creator
export const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}