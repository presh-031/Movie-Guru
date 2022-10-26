import { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import CurrentCategory from "../components/CurrentCategory/CurrentCategory";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const categories_styles = {
    width: "90%",
    margin: "0 auto",
    // border: "1px solid red",
  };

  const heading = {
    width: "90%",
    margin: "4rem auto",
    color: "var(--whitish)",
    fontSize: "2rem",
    fontWeight: "600",
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("/api/movies/categories");
      const data = await res.json();

      if (res.ok) {
        setCategories(data);
      }
    };
    // getCategories();
  }, []);

  return (
    <>
      <p style={heading}>Categories</p>
      {categories && (
        <div style={categories_styles}>
          {categories.map((category) => {
            // return <Category category={category.categories} />;
          })}
        </div>
      )}
      <CurrentCategory />
      {/* The category selected with its movies show below. */}
    </>
  );
};

export default Categories;
