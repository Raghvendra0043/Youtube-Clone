import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from '../utils/Api';

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setloading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setloading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setloading(false);
    });
  };

  return (
    <Context.Provider value={{
      loading,
      setloading,
      searchResults,
      setSearchResults,
      selectCategories,
      setSelectCategories,
      mobileMenu,
      setMobileMenu
    }}>
      {props.children}
    </Context.Provider>
  )
}










