import axios from "axios";
import { create } from "zustand";

const initialUserData = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    phone_number: "",
    address: "",
};

export const useSignUpStore = create((set, get) => ({
    userData: initialUserData,
    resData: {},
    setValue: (value) =>
        set((state) => ({ userData: { ...state.userData, ...value } })),
    sendData: async () => {
        const res = await axios.post(
            "https://market-api.vodiy-yulduzlari.com/auth",
            get().userData,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        set({ resData: res.data });
    },
}));
