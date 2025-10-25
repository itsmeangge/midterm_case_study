import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
     setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert('Order placed successfully! Thank you for your purchase.');
      navigate('/');
    }, 2000);
  };

  const shippingCost = getCartTotal() > 1000 ? 0 : 50;
  const total = getCartTotal() + shippingCost;

  if (cart.items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-checkout">
          <h2>No items in cart</h2>
          <p>Please add some items to your cart before checking out.</p>
          <button onClick={() => navigate('/product')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Shipping Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>
            <div className="payment-methods">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === 'credit-card'}
                  onChange={handleInputChange}
                />
                Credit Card
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                />
                PayPal
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="gcash"
                  checked={formData.paymentMethod === 'gcash'}
                  onChange={handleInputChange}
                />
                GCash
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="place-order-btn"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Place Order - P${total.toFixed(2)}`}
          </button>
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {cart.items.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="order-item-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="order-item-price">
                  P{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>P{getCartTotal().toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>{shippingCost === 0 ? 'FREE' : `P${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="total-row final-total">
              <span>Total:</span>
              <span>P{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;