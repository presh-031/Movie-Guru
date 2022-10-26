import Category from "../components/Category/Category";
import CurrentCategory from "../components/CurrentCategory/CurrentCategory";

const Categories = () => {
  const categories = {
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

  return (
    <>
      <p style={heading}>Categories</p>
      <div style={categories}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <CurrentCategory />
      {/* The category selected with its movies show below. */}
    </>
  );
};

export default Categories;
