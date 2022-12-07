import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoriesAPI() {
  const [categories, setCategories] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `https://vercel.com/shanmugams425/ecommerce-backend/mDfBQMubfEqUyZL8QrvHL6ThkiJo/api/category`
      );
      setCategories(response.data);
    };
    getCategories();
  }, [callback]);
  return {
    categories: [categories, setCategories],
    callback: [callback, setCallback],
  };
}
