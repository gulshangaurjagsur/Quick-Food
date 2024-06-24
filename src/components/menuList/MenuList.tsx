'use client'
import { menuList } from "@component/api-manager";
import styles from "./MenuList.module.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation';


const MenuList = (props: any) => {
  // const navigate = useNavigate();
  const router = useRouter();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getAllMenuBycategory();
  }, []);

  const getAllMenuBycategory = async () => {
    try {
      const res = await menuList();
      setCategory(res?.categories);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  };
    const [meals, setMeals] = useState([]);
    
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (search = '') => {
    setLoading(true);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();

    console.log(data);

    setMeals(data.categories || []);
    setLoading(false);
  };

  const handleSearchChange = (e:any) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value) {
      setLoading(true);
      setTimeout(() => {
        fetchMeals(value);
      }, 1000); // Delay search by 1 second
    } else {
      fetchMeals();
    }
  };
  const handleAddToCart = () => {
    // addToCart(meal);
  };

  
  // };

  useEffect(() => {
    fetchMeals();
  }, []);
  const clickHandler = (id:any)=> {
    router.push('/category/' + id)
  }
  return (
    <div className={styles.overviewWrapper}>
      <div className="container">
        <div className="row">
          {category?.map((item: any, index: number) => (
            <div
              className="col-lg-4"
            >
              <div className={styles.menuWrapper}>
              <div className={styles.imageWrapper}>
                <img src={item?.strCategoryThumb} />
                </div>
                <h2>{item?.strCategory}</h2>
                <p title={item?.strCategoryDescription}>{item?.strCategoryDescription.slice(0, 100)}...</p>
                <button key={item?.idCategory} onClick={() => clickHandler(item?.strCategory)}>Explore</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MenuList;
