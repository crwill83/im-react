import React, { useState, useEffect } from 'react'

const Contact = () => {
    const [age, setAge] = useState(9000)
    const [name, setName] = useState(()=>{console.log('I am constructing'); return 'Chris'})

    
    useEffect(()=>{console.log('I have mounted')}, [])


    return (
        <div>
            {console.log('I have rendered')}
            <h1>{age}</h1>
            <h1>{name}</h1>
            <button onClick={()=>setAge(age+1)}>+</button>
            <button onClick={()=>setName(name+'ha')}>+</button>
        </div>
    )
}

export default Contact;