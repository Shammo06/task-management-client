import axios from "axios";
import { useContext, useEffect, useState } from "react";

import swal from "sweetalert";
import { AuthContext } from "../../AuthContext/AuthProvider";


const Todo = () => {
    const [data, setData] = useState();
    const {user} =useContext(AuthContext);

    useEffect(()=>{
        axios.get(`http://localhost:5000/task?user=${user?.email}`)
        .then(data=> setData(data.data))
    })
    console.log(data)

    const handleClick = (id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this donate food details",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetch(`http://localhost:5000/task/${id}`,{
                method: 'DELETE'
                 })
                .then(res => res.json())
                .then(data => {
                    console.log(data._id)
                    if (data.deletedCount > 0) {
                        swal("Deleted!", "Your task has been removed.", "success");                    
                        const remaining = data.filter(item => item._id !== id);
                        setData(remaining);
                        
                    }
                })
            } else {
              swal("Your task is safe!");
            }
          });
                      
         
    }
    return (   
        <div>
   
           {
                data? 
                <><div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                      <th>Title</th>
                      <th>Deadline</th>
                      <th>Description</th>
                      <th>Action</th>                     
                    </tr>
                  </thead>                 
                  <tbody>
                  {data.map(data =>
                    <tr key={data._id}>
                      <th>{data.title}</th>
                      
                      <td>{data.deadline}</td>
                      <td>{data.description}</td>
                      <td>{data.status}</td>
                      <td>
                        <button className="btn btn-primary" onClick={()=>handleClick(data._id)}>Delete</button></td>
                    </tr>)}
                  </tbody>
                </table>
                </div></>
                
              :
              <p>No Food Request Available for this food</p>

            }          
        </div>
    
    );
};

export default Todo;