import axios from 'axios';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';


const DeleteProduct = () => {
    const [allproducts, setAllproducts] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/product/getProduct"
                );
                setAllproducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const deleteproduct = (productid) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:4000/api/product/deleteProduct/${productid}`)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
       
    };

    return (
        <div>
            {allproducts.map((product, index) => (
                <div key={index} style={{}}>
                    {/* Table Content */}
                    <button
                        className="car"
                        onClick={() => deleteproduct(product.Product_id)}
                        style={{ padding: "4px 60px" }}
                    >
                        <img
                            width={140}
                            src={require(`../images/${product.Product_Image}`)}
                            alt={product.Product_Name}
                        />
                        <h6 style={{ color: "black", fontSize: "50px" }}>
                            {product.Product_Name}
                        </h6>
                        <p style={{ color: "black" }}>KSH {product.Product_Price}</p>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DeleteProduct;
