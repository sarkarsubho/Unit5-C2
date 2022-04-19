import axios from "axios";
import { useEffect, useState } from "react";
import "./ShowStudent.css"

export const ShowStudents = () => {
const [data,setData]=useState([]);
console.log(1)
console.log(data);
useEffect(()=>{
  axios.get('http://localhost:8080/students').then(resp => {

    // console.log(resp.data);
    setData(resp.data);
});
},[]);

const sort =()=>{
  setData(data.sort((a,b)=>{a.age-b.age}));
  console.log(data);
}

  return (
    <div className="show">
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            onChange={()=>sort}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table" >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {data.map((e)=>{
            return  <tr className="row" key={e.id}>
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>})
          }
        
        </tbody>
      </table>
    </div>
  );
};
