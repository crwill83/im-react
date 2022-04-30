import React, { Component } from 'react'
// import Tool from '../components/Tool';
import ToolSimple from '../components/ToolSimple';
import '../components/Tools.css'
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

export default class Tools extends Component {
    constructor() {
        super();
        this.state = {
            tools: []
        }
        this.searchFunction = this.searchFunction.bind(this);
    }

    searchFunction = () => {
        // Declare variables
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
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

                    <Link to="/tools">
                        <button style={{ width: '100px', 'margin': '10px 10px' }}>Card</button>
                    </Link>
                </div>

                <div className='row justify-content-around' div style={{ width: '80%', margin: 'auto', border: '1px solid white' }}>
                    <input type="text" id="myInput" onkeyup={this.searchFunction} placeholder="Search Item Name..." />
                    <table id='myTable' className='table table-dark table-striped' >
                        <tr>
                            <th style={{ 'padding-left': '10px' }}>Link</th>
                            <th style={{ 'padding-left': '10px' }}>Item Name</th>
                            <th style={{ 'padding-left': '10px' }}>Model</th>
                            <th style={{ 'padding-left': '10px' }}>Description</th>
                            <th style={{ 'padding-left': '10px' }}>Serial Number</th>
                        </tr>
                        {this.state.tools.map((t, i) => <ToolSimple key={i} tool={t} />)}
                    </table>
                </div>
            </>
        )
    }

}