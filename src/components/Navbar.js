import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from '../context/CartContext';
import "../styles/components.css";

const Navbar = () => {
    const location = useLocation();
    const { getCartItemsCount } = useCart();

    const linkStyle = (path) => ({
        fontSize: "1.5rem",
        color: "white",
        marginRight: "20px",
        textDecoration: "none",
        fontWeight: location.pathname === path ? "bold" : "normal",
        transition: "0.3s",
    });

    return (
        <nav style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#555",
            padding: "15px 70px",
        }}>
            {/* Logo / Brand Name */}
            <div style={{ color: "white", fontSize: "2.5rem", fontWeight: 800 }}>
                WearDistrict
            </div>

            {/* Search Bar */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    style={{
                        width: "60%",
                        padding: "10px 25px",
                        borderRadius: "10px",
                        border: "none",
                        outline: "none",
                    }}
                />
            </div>

            {/* Navigation Links */}
            <div>
                <Link to="/" style={linkStyle("/")}>
                    Home
                </Link>
                <Link to="/about" style={linkStyle("/about")}>
                    About
                </Link>
                <Link to="/product" style={linkStyle("/product")}>
                    Product
                </Link>
                <Link to="/cart" style={linkStyle("/cart")}>
                    Cart {getCartItemsCount() > 0 && 
                        <span style={{
                            background: 'red', 
                            borderRadius: '50%', 
                            padding: '2px 6px', 
                            fontSize: '0.8rem',
                            marginLeft: '5px'
                        }}>
                            {getCartItemsCount()}
                        </span>
                    }
                </Link>
                <Link to="/admin" style={linkStyle("/admin")}>
                Admin
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;