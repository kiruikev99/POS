import AdminSideBar from "./AdminSideBar";
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddStock = () => {
    const [formData, setFormData] = useState({
        Product_Name: '',
        Product_Qty: '',
        Product_Price: '',
        Product_Description: '',
        Product_Image: null, // Initialize Product_Image as null
    });

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            Product_Image: e.target.files[0], // Store the file object directly
        });
    };

    const display = () => {
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Product_Name', formData.Product_Name);
            formDataToSend.append('Product_Qty', formData.Product_Qty);
            formDataToSend.append('Product_Price', formData.Product_Price);
            formDataToSend.append('Product_Description', formData.Product_Description);
            formDataToSend.append('Product_Image', formData.Product_Image); // Append file to FormData

            const response = await axios.post("http://localhost:4000/api/product/addProduct", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
                }
            });

            console.log("Form data submitted successfully:", response.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Has been Added",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error("Error submitting form data:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <div className="sidebar">
                <AdminSideBar />
            </div>
            <div style={{ padding: "50px", paddingTop: "0", display: "flex", justifyContent: "center", backgroundColor: "#002244" }}>
                <div className="form">
                    <br></br>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "30px", borderRadius:"40px" }}>
                        <header style={{display: "flex", justifyContent: "center"}}>
                            <img style={{textAlign: "center"}} width={100} src={require('./images/add.png')} alt="Add Product" />
                            <h1 style={{paddingTop: "30px", paddingLeft:"10px"}}>Add Hardware Stock</h1>
                        </header>
                        <div style={{ display: "flex", gap: "90px" }}>
                            <div style={{ flex: 1 }}>
                                <label>Product Name</label>
                                <input onChange={handleChange} type="text" name="Product_Name" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label>Product Quantity</label><br />
                                <input onChange={handleChange} style={{width: "100%"}} type="number" name="Product_Qty" />
                            </div>
                        </div>
                        <div style={{ flex: 2, display: "flex", gap: "60px" }}>
                            <div>
                                <label>Product Price</label>
                                <input onChange={handleChange} type="number" name="Product_Price" />
                            </div>
                            <div style={{flex: 5}}>
                                <label>Product Description</label><br />
                                <textarea onChange={handleChange} style={{width: "120%"}} name="Product_Description"></textarea>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div style={{flex: 3}}>
                                <label>Product Image</label>
                                <input onChange={handleFileChange} type="file" name="Product_Image" />
                            </div>
                        </div>
                        <button onClick={display} type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStock;
