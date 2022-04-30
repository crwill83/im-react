import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function OneTool() {
    const { toolId } = useParams()


    const [tool, setTool] = useState({})


    useEffect(async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/tools/${toolId}`);
        const data = await res.json();
        console.log(data)

        if (data.status === 'ok') {
            setTool(data.tool)
        }
        else {
            // redirect
        }

    }, [])


    return (
        <div style={{ width: '250px', margin: 'auto'}}>
            <Link to="/tools/list">
                <button style={{ width: '100px' }}>Table</button>
            </Link>
            <Link to="/tools">
                <button style={{ width: '100px', 'margin': '10px 10px' }}>Card</button>
            </Link>
            <Link to="/tools" id="card" className="card text-dark" style={{ width: "18rem" }}>
                <img src={tool.item_image} className="card-img-top" alt={tool.item_name} />
                <div className="card-body">
                    <h5 className="card-title">{tool.item_name}</h5>
                    <p className="card-text" style={{ 'font-weight': "bold" }}>Model:</p>
                    <p className="card-text">{tool.item_model}</p>
                    <p className="card-text" style={{ 'font-weight': "bold" }}>Description:</p>
                    <p className="card-text">{tool.item_description}</p>

                    <button href="/" type="button" className="btn btn-success">Add to Cart</button>
                </div>
            </Link>
        </div>
        
    )
}