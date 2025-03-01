import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      let { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      setCategories(data.categories);
    }

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
