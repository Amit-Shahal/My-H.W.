import { Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

export default function FCNewRecipe(props) {
    const [loading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState(true);


    //JSON.stringify
    useEffect( () => {
        const url = 'http://localhost:57403/api/values';
        const response = fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',

            })
            
        }).then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
          }).then(
            (result) => {
              console.log("fetch btnFetchGetStudents= ", result);
              result.map(st => console.log(st.name));
            },
            (error) => {
              console.log("err post=", error);
            });
        
        setLoading(false);
        console.log(response);  
    }, []);

    return (
        
        <div>
          
            {loading ? (
                <h1>Loading...</h1>
                ) : (
                <h1>person</h1>
            )}

        </div>
    )
}
