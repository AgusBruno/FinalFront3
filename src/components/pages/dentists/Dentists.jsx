import axios from "axios";
import {useEffect, useState } from "react";
import Card from "../../common/card/card";

import { Typography } from "@mui/material";

const Dentists = () => {
  const [dentists, setDentists] = useState([]);


  useEffect(() => {

    //fetch('https://jsonplaceholder.typicode.com/users')
    //.then(res => res.json())
    //.then(res=> setDentists(res.result))
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setDentists(res.data));
        
  }, []);
 console.log(dentists)

 return (
  <main className="home" >
    <Typography color="primary" variant="h3" align="center" margin={10}>
        Nuestros Odontólogos
      </Typography>
    <div className='card-grid'>
      {dentists ?. map(dentist =>{
        return <Card key={dentist.id} data={dentist} id={dentist.id} name={dentist.name} username={dentist.username}/>
        })}
    </div>
  </main>
)
}
;

export default Dentists;
