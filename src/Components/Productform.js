import React, {useState,useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Productform() {
    const [productName,setProductName] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState(null);
    const [message,setMessage] = useState('');


     const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',productName);
        formData.append('description',description);
        formData.append('image',image);

        try {
            const response = await axios.post('https://yourapi.com/products',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200){
                setMessage('Product added successfully!');
            }
        } catch (error){
            setMessage('Error adding product.Please try again.');
        }
     };
      const handleImageChange = (event) => {
        setImage(event.target.files[0]);
      };
      return (
        <div className="container">
            <h1>Add product</h1>
            <form onSubmit ={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required/>
                </div>
            
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image</label>
                    <input
                    type="file"
                    className="form-control"
                    id="image"
                    
                    onChange={handleImageChange}
                    required/>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
                {message && <p className="mt-3">{message}</p>}
        </div>
      );
}
export default Productform;