
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Card,Button} from "react-bootstrap"



function UserList() {
  const [user,setUser]=useState ([])
  const [loading,setLoading]=useState (true)
  useEffect(()=>{

  const FetchData=async()=>{
    try{

      const res = await  axios.get ('https://jsonplaceholder.typicode.com/users')
      setUser (res.data)
      setLoading (false)
    }
    catch (error) {
      console.log("error")

    }
  }
  FetchData()
  } ,[])
  return (
    <div className="App">
  <Card  style={{color:'black', width: '25rem'  ,marginLeft: "36%" }}>
  <Card.Img variant="top" src="https://dimelo-users-production.s3-eu-west-1.amazonaws.com/identity_avatars/b9e8bc865ba4174a/avatar_x-large.png?c5ee6c3" />
  <Card.Body>
    <Card.Title>users</Card.Title>
    <Card>
    {loading ? <p>...loading </p> : user.map((use) => 
    <ul>
        <li>UserName: {use.username}</li>
       
        <li>Name : {use.name}</li>
        <li>Email: {use.email}</li>
    </ul>
     )}
    </Card>
    <Button variant="primary">home</Button>
  </Card.Body>
</Card>
        
    </div>
  );
}

export default UserList;