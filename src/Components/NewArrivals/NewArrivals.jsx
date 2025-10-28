import { Link } from "react-router-dom";
import products from "../../data/productsData.jsx";
import "./NewArrivals.css"; // ensure you link to your CSS file

function NewArrivals() {
  return (
    <section className="new-arrivals-section">
      <div className="container">
        <h2 className="section-heading">New Arrivals</h2>

        <div className="scroll-container">
          {products.slice(0, 6).map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
