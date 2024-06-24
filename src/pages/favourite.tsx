// MenuPage.jsx
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header from "@component/components/header/header";

import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Overview from "@component/components/overview/Overview";
import Footer from "@component/components/footer/footer";
import commomData from "../assets/data/common.json";

const Favourite = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const { category } = useParams();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("myItems")));
  }, []);

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
        <title>QuickFood Services - My Favourite Food</title>
        <meta name="description" content="QuickFood Services - My Favourite Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Header compData={commomData?.header} />
      <Overview compData={commomData?.favouriteOverview} />
      <div className="menu-container mb-5">
        <div className="meals-list">
          {favorite.map((meal) => (
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

export default Favourite;
