import React from "react";
import { useNavigate } from "react-router-dom";
import './Admin.css';

const Admin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="admin-page">
            <h1 className="admin-header">Admin Dashboard</h1>
            <p className="admin-subtext">Manage products, orders, and users efficiently.</p>

            {/* Stats Section */}
            <div className="stats-container">
                <div className="stat-card">
                    <h3>Total Sales</h3>
                    <p>₱50,000</p>
                </div>
                <div className="stat-card">
                    <h3>Orders</h3>
                    <p>50</p>
                </div>
                <div className="stat-card">
                    <h3>Products</h3>
                    <p>10</p>
                </div>
                <div className="stat-card">
                    <h3>Users</h3>
                    <p>50</p>
                </div>
            </div>

            {/* Product Management */}
            <section className="admin-section">
                <h2>Product Management</h2>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>HashCravel Limited Edition</td>
                            <td>Men</td>
                            <td>₱799</td>
                            <td>34</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#002</td>
                            <td>California Shirt</td>
                            <td>Women</td>
                            <td>₱849</td>
                            <td>21</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#003</td>
                            <td>GAMER f. Football Shirt</td>
                            <td>Unisex</td>
                            <td>₱599</td>
                            <td>17</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Orders Section */}
            <section className="admin-section">
                <h2>Orders Overview</h2>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-1001</td>
                            <td>Angel Mae Garcia</td>
                            <td>Oct 23, 2025</td>
                            <td><span className="status delivered">Delivered</span></td>
                            <td>₱1,456</td>
                        </tr>
                        <tr>
                            <td>#ORD-1002</td>
                            <td>John Michael Gigante</td>
                            <td>Oct 24, 2025</td>
                            <td><span className="status pending">Pending</span></td>
                            <td>₱1,799</td>
                        </tr>
                        <tr>
                            <td>#ORD-1003</td>
                            <td>Algie Ili</td>
                            <td>Oct 25, 2025</td>
                            <td><span className="status canceled">Canceled</span></td>
                            <td>₱899</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Admin;
