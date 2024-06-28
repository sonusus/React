import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Dataform() {
    const [formData,setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name,value} = event.target;
        setFormData((prevData) => ({... prevData, [name]: value}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData,"input data");
    };
    return(
        <div className='container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
    
        <label htmlFor="fname">first name</label>
        <input type="text"  className='form-control' name="fname" value={formData.fname}
         onChange={handleInputChange} />

         <label htmlFor="lname">last name</label>
         <input type="text"  className='form-control' name="lname" value={formData.lname}
         onChange={handleInputChange} />
    
         <label htmlFor="email">email</label>
        <input type="email"  className='form-control' name="email" value={formData.email}
         onChange={handleInputChange} />

         <label htmlFor="password">Password</label>
        <input type="password"  className='form-control' name="password" value={formData.password}
         onChange={handleInputChange} />
    
        <button type="submit" className='btn-btn-success'>Register</button>
        </form>
      </div>
    );
}
export default Dataform;