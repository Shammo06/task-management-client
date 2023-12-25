/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";



const AddTask = () => {
    const {register, handleSubmit,reset} = useForm();
    const {user} = useContext(AuthContext);
    
    const onSubmit = data => {
      data["type"]='todo'
      data["user"]= user.email 
      axios.post('http://localhost:5000/task', data)
       .then(response  => {
         if(response.statusText==='OK'){
             swal("Successfully", "Your Task has been Added.", "success");
             reset();
         }
       })
       .catch(error=> {
         console.log(error);
       }); 
    console.log(data)
    }

    const Input = ({ label, name, placeholder }) => (
        <div className="form-group ">
          <label className="input-label text-white">
            {label}
          </label>
          <input {...register(name, { required: true })} className="form-control input input-bordered w-80" placeholder={placeholder} />
        </div>
      );
   
    return (
        <div> 
                      
            <form className="py-8 px-10 gap-3 bg-gray-600" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="col-span-2 mx-auto w-1/2 text-3xl font-bold text-white">ADD TASK</h1>
                <Input label='Task Title' name='title' placeholder="Title"/>
                <div className="form-group ">
                <label className="input-label text-white">
                    Select Priority
                </label>
                <select {...register("priority")} className="form-control input input-bordered w-80">
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                </select>
                </div>
                <Input label='Deadline' name='deadline' placeholder="YYYY-MM-DD" />                                
                
                <div className="form-group pb-5">
                    <label className="input-label text-white">Description</label>
                    <input {...register('description', { required: true })} className="form-control input input-bordered h-20 w-3/4" />
                </div>                               
                <button className="btn btn-primary col-span-2 mx-auto w-1/2">ADD</button>                
            </form>
        </div>
    );
    
};


export default AddTask;