import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0,20)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Aisle</th>
            <th style={thStyle}>Original Price</th>
            <th style={thStyle}>Cost</th>
            <th style={thStyle}>Discount</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td style={tdStyle}>{product.product_id}</td>
              <td style={tdStyle}>{product.product_name}</td>
              <td style={tdStyle}>{product.department}</td>
              <td style={tdStyle}>{product.aisle}</td>
              <td style={tdStyle}>{product.ori_price}</td>
              <td style={tdStyle}>{product.cost}</td>
              <td style={tdStyle}>{product.discount}</td>
              <td style={tdStyle}>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
  backgroundColor: "#f5f5f5",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

export default ProductsPage;