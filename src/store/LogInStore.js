import axios from "axios";
import { create } from "zustand";

const initialUserData = {
    username: "",
    password: "",
};

export const useLogInStore = create((set, get) => ({
    userData: initialUserData,
    resData: {},
    setValue: (value) =>
        set((state) => ({ userData: { ...state.userData, ...value } })),
    sendData: async () => {
        const res = await axios.post(
            "https://market-api.vodiy-yulduzlari.com/auth/login",
            get().userData,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        set({ resData: res.data });
    },
}));
