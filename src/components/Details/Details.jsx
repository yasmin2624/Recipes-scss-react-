import { useContext, useEffect } from "react";
import { MealsContext } from "../../Context/MealsContext.jsx";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import { FaYoutube } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

export default function Details() {
  const { selectedMeal, fetchMealDetails } = useContext(MealsContext);
  const { idMeal } = useParams();

  useEffect(() => {
    if (idMeal) {
      fetchMealDetails(idMeal);
    }
  }, [idMeal]);
  

  if (!selectedMeal) return <p>Loading...</p>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.imageContainer}>
        <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
      </div>

      <div className={styles.detailsContent}>
        <h2 className={styles.title}>{selectedMeal.strMeal}</h2>
        <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
        <p><strong>Area:</strong> {selectedMeal.strArea}</p>
        <p>{selectedMeal.strInstructions}</p>

        <div className={styles.buttons}>
          <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer" className={styles.youtubeButton}>
            <FaYoutube /> YouTube
          </a>
          <a href={selectedMeal.strSource} target="_blank" rel="noopener noreferrer" className={styles.sourceButton}>
            <IoEarth /> Source
          </a>
        </div>
      </div>

      <div className={styles.ingredients}>
        <h3>Ingredients</h3>
        <ul>
          {Object.keys(selectedMeal)
            .filter((key) => key.startsWith("strIngredient") && selectedMeal[key])
            .map((key, index) => (
              <li key={index}>
                <span>{selectedMeal[key]}</span>
                <span>{selectedMeal[`strMeasure${index + 1}`]}</span>
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
}