import { authKey, serviceKey } from "@/constants/storageKey";
import { instance as axiosInstance } from "../helpers/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { decodedToken } from "../utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { loginPayload } from "@/types";

export const storeUserInfo = (accessToken: string) => {
  if (!accessToken) return;
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = (payload: string | null): loginPayload | null => {
  const authToken = getFromLocalStorage(authKey);
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(payload || authToken);
    return decodedData as loginPayload;
  } else {
    return null;
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};

export const setServiceToCart = (data: any) => {
  const storageData: any = getFromLocalStorage(serviceKey);
  let localData: any = [];
  if (storageData) {
    localData = [...JSON.parse(storageData)];
  }
  localData.push(data);
  setToLocalStorage(serviceKey, JSON.stringify(localData));
};
