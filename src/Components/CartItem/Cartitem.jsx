import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cartitem.css";
import { ImCross } from "react-icons/im";
import { FaPlus, FaMinus } from "react-icons/fa";

/**
 * Simple, reusable cart row.
 * Props:
 *  - product: { id, title, name, price, image }
 *  - initialQty
 *  - onRemove (id) optional
 */
function Cartitem({
  product = {
    id: 1,
    title: "Product Title",
    name: "Product Name",
    price: 29.99,
    image: null,
  },
  initialQty = 1,
  onRemove,
}) {
  const navigate = useNavigate();
  const [qty, setQty] = useState(Math.max(1, initialQty));
  const total = product.price * qty;

  const changeQty = (delta) => {
    setQty((q) => Math.max(1, q + delta));
  };

  const handleRemove = () => {
    if (onRemove) onRemove(product.id);
  };

  const fmt = (value) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(
      value
    );

  return (
    <article className="cart-item card" role="group" aria-label={`${product.title} cart row`}>
      <div className="card-left">
        <div className="cart-thumb">
          {product.image ? (
            <img src={product.image} alt={product.title} />
          ) : (
            <div className="thumb-placeholder" aria-hidden>
              No Image
            </div>
          )}
        </div>
        <div className="cart-meta">
          <div className="cart-title">{product.title}</div>
          <div className="cart-name">{product.name}</div>
          <div className="cart-price-badge">{fmt(product.price)}</div>
        </div>
      </div>

      <div className="cart-qty-wrap" aria-live="polite">
        <button
          type="button"
          className="qty-btn"
          onClick={() => changeQty(-1)}
          aria-label="Decrease quantity"
          title="Decrease"
        >
          <FaMinus />
        </button>

        <div className="qty-value" aria-label={`Quantity ${qty}`}>{qty}</div>

        <button
          type="button"
          className="qty-btn"
          onClick={() => changeQty(1)}
          aria-label="Increase quantity"
          title="Increase"
        >
          <FaPlus />
        </button>
      </div>

      <div className="cart-total">
        <div className="total-label">Total</div>
        <div className="total-value">{fmt(total)}</div>
      </div>

      <div className="cart-actions">
        <button
          type="button"
          className="remove-btn"
          onClick={handleRemove}
          aria-label="Remove item"
          title="Remove item"
        >
          <ImCross />
        </button>

        <button
          type="button"
          className="home-btn"
          onClick={() => navigate("/")}
          aria-label="Return to home"
          title="Return to home"
        >
          <ImCross />
        </button>
      </div>
    </article>
  );
}

export default Cartitem;