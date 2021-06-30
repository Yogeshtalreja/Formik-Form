import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Fetch = (props) =>{
const [data,setData] = useState([]);

 
useEffect(()=>{
    axios.get('http://localhost:8081/user/getData').then(resp => {

        // console.log(resp.data);
         setData(resp.data);
     }); 
},[]);

    
    
return(

<div>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
  
  {
      data.map((d)=>(
<tr>
<td>{d.id}</td>
<td>{d.name}</td>
<td>{d.email}</td>
<td>{d.password}</td>

</tr>

      ))
  }  
  </tbody>
</Table>
    </div>

);

}

export default Fetch;