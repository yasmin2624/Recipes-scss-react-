import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MealsContext = createContext();

export default function MealsProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); 

  async function fetchMeals(category = "") {
    try {
      const url = category && category !== "All"
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        : "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      const { data } = await axios.get(url);
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
    }
  }

  async function fetchMealDetails(idMeal) {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      const { data } = await axios.get(url);
      console.log("Fetched Meal Details:", data); 
      setSelectedMeal(data.meals[0] || null);
    } catch (error) {
      console.error("Error fetching meal details:", error);
      setSelectedMeal(null);
    }
  }
  useEffect(() => {
    fetchMeals(); 
  }, []);

  return (
    <MealsContext.Provider value={{ meals, fetchMeals, selectedMeal, fetchMealDetails }}>
      {children}
    </MealsContext.Provider>
  );
}
