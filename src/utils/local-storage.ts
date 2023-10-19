"use client";
export const setToLocalStorage = (key: string, token: string) => {
  if (!key) {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key) {
    return "";
  }
  return localStorage.getItem(key);
};
