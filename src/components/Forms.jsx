import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Form = () => {
    //const [page, setPage] = useState(1)
    const [formData, setFormData] =useState([{
        Name:"",
        Age:"",
        Address:"",
        Department:"",
        Salary:"",
        MaritalState:""

    }])

    useEffect(
        function (){
           
            getData();
         
        },[]);

    const getData = async () =>{
        const data = await fetch(`http://localhost:8080/Users`).then((d)=> d.json())
        // .then((data) =>{
        //     console.log(data);
        //     setTodos(data);
        // });
    
    setFormData(data);
    };
    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
           let res=await fetch("http://localhost:8080/Users",{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
            }
            })
            let data=await res.json();
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    
    }




  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder='Name' name='Name' id='Name'/>
            <input onChange={handleChange} type="number" placeholder='Age' name='Age' id='Age'/>
            <input onChange={handleChange} type="textarea" placeholder='Address' name='Address' id='Address' />
            <select onChange={handleChange} name="Department" id="Department" value={"full Stack Web Developer"}>
                <option value="">Select Department</option>
                <option value="full stack developer">Full Stack Web Development</option>
                <option value="senior executive">Senior Executive</option>
                <option value="hr manager">Hr Manager</option>
            </select>
            <input onChange={handleChange} type="number" placeholder='Salary' name="Salary" id="Salary" />
           
            <div className="form-check">
                <input onChange={handleChange} value="Married" className="form-check-input" type="radio" name="MaritalState" id="MaritalState1" />
                <label className="form-check-label" htmlFor="MaritalState1">
                    Married
                </label>
           </div>
            <div className="form-check">
                <input onChange={handleChange} value="Not Married" className="form-check-input" type="radio" name="MaritalState" id="MaritalState2" defaultChecked />
                <label className="form-check-label" htmlFor="MaritalState2">
                    Not Yet
                </label>
            </div>

            <input type="submit" />

            {formData.map((t) => (
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Adress</th>
        <th>Position</th>
        <th>Salary</th>
        <th>Marital Status</th>
    </tr>
      
<tr>
<td>

{t.Name}
</td>


    <td>
        {t.Age}
    </td>

    <td>
        {t.Address}
    </td>

    <td>
        {t.Department}
    </td>

    <td>
        {t.Salary}
    </td>

    <td>
        {t.MaritalState}
    </td>
</tr>

</table>

))}
        </form >
      
    </>
  )
}

export default Form