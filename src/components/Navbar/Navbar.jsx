import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../Context/CategoriesContext";
import { MealsContext } from "../../Context/MealsContext";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { categories } = useContext(CategoriesContext);
  const { fetchMeals } = useContext(MealsContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    fetchMeals(category === "All" ? "" : category);
  }

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Learn, Cook, Eat Your Food</h2>

      {/* ✅ الأزرار ستظل كما هي في الشاشات الكبيرة */}
      <div className={styles.categories}>
        <button
          className={selectedCategory === "All" ? styles.active : ""}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className={selectedCategory === category.strCategory ? styles.active : ""}
            onClick={() => handleCategoryChange(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {/* ✅ القائمة المنسدلة ستظهر فقط في الشاشات الصغيرة */}
      <div className={styles.dropdownWrapper}>
        <select
          className={styles.dropdown}
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
