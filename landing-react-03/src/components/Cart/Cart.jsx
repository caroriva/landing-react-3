import { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const finalizePurchase = () => {
    setIsModalOpen(true);
    setModalContent({
      title: "Finalize Purchase",
      message: "Are you sure you want to complete your purchase?",
      onConfirm: () => {
        clearCart();
        setIsModalOpen(false);
      },
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => clearCart()}>Clear Cart</button>
      <button onClick={() => finalizePurchase()}>Finalize Purchase</button>

      {isModalOpen && (
        <Modal
          title={modalContent.title}
          message={modalContent.message}
          onConfirm={modalContent.onConfirm}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default Cart;
