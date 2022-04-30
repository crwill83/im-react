import React, { Component } from 'react'
import './Tools.css'
import { Link } from 'react-router-dom'

export default class ToolSimple extends Component {
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

    render() {
        const t = this.props.tool
        return (
            <tr>
                <Link to={`/tools/${t.id}`} id="" className="" >
                    <td align='center'><img src={t.item_image} alt="" style={{ 'display': 'block', 'margin':'auto', 'height': '40px', 'width': '40px' }} /></td>
                </Link>
                <td style={{ 'padding-left':'10px' }}>{t.item_name}</td>
                <td style={{ 'padding-left':'10px' }}>{t.item_model}</td>
                <td style={{ 'padding-left':'10px' }}>{t.item_description}</td>
                <td style={{ 'padding-left':'10px' }}>{t.item_serial}</td>
            </tr>
        )
    }
}
