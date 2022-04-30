import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Tool from '../components/Tool';

export default class Tools extends Component {
    constructor() {
        super();
        this.state = {
            tools: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/tools');
        const data = await res.json();
        console.log(data)
        const myTools = data.tools
        this.setState({
            tools: myTools
        })
    }

    render() {
        console.log(this.state.tools)
        return (
            <>
                <div style={{ width: '250px', margin: 'auto' }}>
                    <Link to="/tools/list">
                        <button style={{ width: '100px', 'margin':'20px 0px' }}>Table</button>
                    </Link>
                </div>
                <div className='row justify-content-around' div style={{ width: '80%', margin: 'auto' }}>
                    {this.state.tools.map((t, i) => <Tool key={i} tool={t} />)}
                </div>
            </>
        )
    }

}
