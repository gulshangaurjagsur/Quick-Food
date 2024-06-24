// MenuPage.jsx
import React, { useState, useEffect } from "react";
import Header from "@component/components/header/header";
import Footer from "@component/components/footer/footer";
import commomData from "../../assets/data/common.json";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Head from "next/head";
const Category = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("myItems")));
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
        router.query.slug
    );
    const data = await response.json();

    console.log(data);

    setMeals(data.meals || []);
    setLoading(false);
  };
  console.log(router.query.slug);

  const clickHandler = (favourite) => {
    const items = JSON.parse(localStorage.getItem("myItems")) || [];
    const index = items?.findIndex(
      (value) => value.idMeal === favourite.idMeal
    );

    if (index === -1 || !items) {
      items.push(favourite);
    } else {
      items.splice(index, 1);
    }
    setFavorite(items);
    const newItems = JSON.stringify(items);
    localStorage.setItem("myItems", newItems);
  };

  return (
    <>
    <Head>
        <title>QuickFood Services - Categories</title>
        <meta name="description" content="QuickFood Services - Categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className="mainContainer">
      <Header compData={commomData?.header} />
      <div className="menu-container">
        <h2 className="categoryHeading">{router.query.slug}</h2>
        <div className="meals-list mb-5">
            {meals.map((meal) => (
              <div
                title="Add To Favourite"
                className="meal-card"
                key={meal.idMeal}
                onClick={() => clickHandler(meal)}
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h2>{meal.strMeal}</h2>
                {favorite?.findIndex((item) => item.idMeal === meal.idMeal) ===
                -1 ? (
                  <FaRegHeart />
                ) : (
                  <FaHeart className="fill-heart" />
                )}
              </div>
            ))}
          </div>
      </div>
      <Footer compData={commomData?.footer} />
      </main>
    </>
  );
};

export default Category;
