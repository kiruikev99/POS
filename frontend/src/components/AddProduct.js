import './addproduct.css';
import pos from '../images/pos.png';
import add from '../images/addproduct.png';
import dex from '../images/dex.png';
import add1 from '../images/add.jpg';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        Product_Name: '',
        Product_Qty: '',
        Product_Price: '',
        Product_Description: '',
        Product_Image: null, // Initialize Product_Image as null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            Product_Image: e.target.files[0], // Store the file object directly
        });
    };
    const display = () => {
        console.log(formData)

    }

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
        }
    };

    return (
        <body>
            <br />
            <div className='divide'>
                <div className='sec-2'>
                    <img src={add1} alt="Add product image" />
                </div>

                <div className='sec-1'>
                    <div className='img'>
                        <img width={140} src={pos} alt="POS image" />
                        <h2>ADD PRODUCT</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Product_Name"
                            value={formData.Product_Name}
                            onChange={handleChange}
                            placeholder="Product Name"
                        />
                        <br /><br />
                        <input
                            type="number"
                            name="Product_Qty"
                            value={formData.Product_Qty}
                            onChange={handleChange}
                            placeholder="Product Quantity"
                        />
                        <br /><br />
                        <input
                            type="number"
                            name="Product_Price"
                            value={formData.Product_Price}
                            onChange={handleChange}
                            placeholder="Product Price"
                        />
                        <br /><br />
                        <input
                            type="text"
                            name="Product_Description"
                            value={formData.Product_Description}
                            onChange={handleChange}
                            placeholder="Product Description"
                        />
                        <br />
                        <input
                            type="file"
                            name="Product_Image"
                            onChange={handleFileChange} // Handle file input change
                            placeholder=""
                        />
                        <br /><br /><br /><br />
                        <button onClick={display} type='submit'>Add Product</button>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default AddProduct;
