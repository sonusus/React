import React, {useState,useEffect} from "react";
import axios from 'axios';

function Datafetch() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => {
            setData(response.data);
            setLoading(false);
         })
         .catch(error => {
            setError(error);
            setLoading(false);
         });
    }, []);
    
    if (loading) return <div>Loading....</div>;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <div className="container">
            <h1>Datafetch</h1>
            <div className="row">
                {data.map(post =>(
                     <div key={post.id} className="col-md-4" >
                    <div className="card mb-4" >
                    <img src={`https://via.placeholder.com/150?text=Post+${post.id}`} className="card-img-top" alt={`Post ${post.id}`} style={{height:'150px'}}/>
                    <div className="card-body">
                       <h5 className="card-title">{post.title}</h5>
                      
                       <p className="card-text">{post.body}</p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
                }

export default Datafetch;


