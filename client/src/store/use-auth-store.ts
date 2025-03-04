import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "@/types/auth/auth";

interface AuthState {
  token: string | null;
  otp: string | null;
  userData: UserData | null;
  setToken: (token: string) => void;
  setOtp: (otp: string) => void;
  setUserData: (userData: UserData) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      userData: null,
      otp: null,
      setToken: (token: string) => set({ token }),
      setOtp: (otp: string) => set({ otp }),
      setUserData: (userData: UserData) => set({ userData }),
      logout: () => set({ token: null, userData: null, otp: null }),
      isAuthenticated: () => !!get().token,
    }),
    {
      name: "auth-storage",
    }
  )
);
