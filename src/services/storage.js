import { STORAGE } from "../common/constants";

export const StorageServices = () => {
  const setStorage = ({ value }) => {
    // Salvar no localStorage
    // LocalStorage aceita comente strings, por isso precisa converter
    localStorage.setItem(STORAGE.employees, JSON.stringify(value));
  };

  const getStorage = ({ value }) => {
    return JSON.parse(localStorage.getItem(value));
  };

  return {
    setStorage,
    getStorage,
  };
};
