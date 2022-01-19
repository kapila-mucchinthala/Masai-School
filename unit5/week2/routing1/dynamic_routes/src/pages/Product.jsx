import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import "./pages.css";

const Product = () => {
  const { data } = useContext(AppContext);

  const renderRows = () => {
    return (
      <>
        {data.map(({ name, price, id }, i) => (
          <tr key={i}>
            <td>{name}</td>
            <td>{price}</td>
            <td>
              <Link to={`/products/${id}`}>Click Here For more Details</Link>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Product;
