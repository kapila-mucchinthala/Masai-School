import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log("params", params);
  const { data } = useContext(AppContext);
  const isPresent = () => {
    var flag = false;
    data.map(({ id }) => {
      if (id === Number(params.id)) {
        flag = true;
        return flag;
      }
    });
    return flag;
  };
  const showData = () => {
    return data.map(({ name, id }) => {
      if (id === Number(params.id)) {
        return name;
      }
    });
  };
  return (
    <>
      {isPresent() ? (
        <>
          <h1>ProductDetails</h1>
          <p>
            You are now seeing the details of <strong>{showData()}</strong>
          </p>
          <Link to="/products">
            <button>GO BACK</button>
          </Link>
        </>
      ) : (
        <h1>Data Not Present</h1>
      )}
    </>
  );
};

export default ProductDetails;
