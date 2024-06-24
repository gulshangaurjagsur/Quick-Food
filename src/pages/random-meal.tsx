import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header from "@component/components/header/header";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import commomData from "../assets/data/common.json";
export default function RandomMeal() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCategoryData();
  }, []);
  const fetchCategoryData = async () => {
    console.log("clicked");
    setLoading(true);
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    console.log(data);
    setMeals(data.meals || []);
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>QuickFood Services - Random Meal</title>
        <meta name="description" content="QuickFood Services - Random Meal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commomData?.header} />
        <Banner compData={commomData?.banner} />
        <Overview compData={commomData?.randomMealOverview} />
        <>
          <div className="text-center mb-5">
            <div className="meals-list">
              {meals.map((meal) => (
                <div className="meal-card mb-4" key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <h3>{meal.strMeal}</h3>
                  <h2>{meal.strCategory}</h2>
                </div>
              ))}
            </div>
            <button className="add-to-cart-button" onClick={fetchCategoryData}>
              Generate
            </button>
          </div>
        </>
        <Footer compData={commomData?.footer} />
      </main>
    </>
  );
}
