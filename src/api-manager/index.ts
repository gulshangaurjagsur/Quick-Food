import axios from "axios";


export const menuList = async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    return await response?.data
};

// export const getMealByCategory = async (category:string) => {
//     const response = await axios.get("www.themealdb.com/api/json/v1/1/filter.php?c=${category}");
//     return await response?.data
// };
export const getMealByCategory = async (category:string) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching meals by category:", error);
        throw error;
    }
};
