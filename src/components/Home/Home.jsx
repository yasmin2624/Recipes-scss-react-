import React, { useContext } from "react";
import styles from "./Home.module.scss";
import Navbar from "../Navbar/Navbar";
import { MealsContext } from "../../Context/MealsContext.jsx";
import { Link } from "react-router-dom";
import { IoEarth } from "react-icons/io5";





export default function Home() {
  const { meals } = useContext(MealsContext);


  


  return (
    <>
      <Navbar />
      <div className={styles.mealsContainer}>
      {meals.map((meal) => (
        <div key={meal.idMeal} className={styles.mealCard}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className={styles.mealImage} />
          <h3 className={styles.mealTitle}>{meal.strMeal.split(" ").splice(0, 2).join(" ")}</h3>
          <p className={styles.mealCountry}>
  {meal.strArea && (
    <>
      <span className={styles.icon}><IoEarth /></span> {meal.strArea}
    </>
  )}
</p>


<Link to={`/details/${meal.idMeal}`} className={styles.detailsButton}>
  View Recipe
</Link>

        </div>
      ))}
    </div>
    </>
  );
}
