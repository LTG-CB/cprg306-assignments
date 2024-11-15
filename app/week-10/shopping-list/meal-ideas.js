"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
        console.log("Fetching from URL:", url);
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        console.log(`Fetching meal ideas for ingredient: "${ingredient}"`);
        const fetchedMeals = await fetchMealIdeas(ingredient);
        console.log(`Fetched meals for "${ingredient}":`, fetchedMeals);
        setMeals(fetchedMeals);
    };
    

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            {meals.length === 0 ? (
                <p>No meal ideas found for "{ingredient}".</p>
            ) : (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
