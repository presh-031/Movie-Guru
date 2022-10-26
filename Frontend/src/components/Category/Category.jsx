import css from "./Category.module.css";

const Category = ({ category }) => {
  return (
    // <div className={css.category_container}>
    <p className={css.category}>{category}</p>
    // </div>
  );
};

export default Category;
