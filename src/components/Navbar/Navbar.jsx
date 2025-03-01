import React, { useContext, useState } from "react";
import { CategoriesContext } from '../../Context/CategoriesContext';
import styles from "./Navbar.module.scss";
import { MealsContext } from "../../Context/MealsContext";




export default function Navbar() {
  const { categories } = useContext(CategoriesContext);
  const { fetchMeals } = useContext(MealsContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    fetchMeals(category === "All" ? "" : category);
  }

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Learn, Cook, Eat Your Food</h2>
      <div className={styles.categories}>
        <button
          className={selectedCategory === "All" ? styles.active : ""}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className={selectedCategory === category.strCategory ? styles.active : ""}
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </nav>
  );
}