import React, { useState,useEffect } from 'react'
 
 
export const Countrydata = () => {
    
       let[globaldata, setglobaldata] = useState([]);

    useEffect(() => {
        async function api() {
            let response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            let data = await response.json();
            console.log(Object.values(Object.values(data.countryitems)[0]));
            setglobaldata((Object.values(Object.values(data.countryitems)[0])));
             
        }
        api();
    }, [])


    return (
        <div>
           <center>
    <div>
        <table border="1" className="sizetable"> 
            <th>Country</th>
            <th>TOTAL CASES</th>
            <th>TOTAL DEATHS</th>
       {globaldata.map((key,val)=>{
           return(
           <tr>
              <td> {globaldata[val].title} </td>
              <td> {globaldata[val].total_cases} </td>
              <td> {globaldata[val].total_deaths} </td>
            </tr>
           )
       })}
       </table>
    </div>
    </center>
        </div>
    )
}
