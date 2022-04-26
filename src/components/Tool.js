import React, { Component } from 'react'
import './Tools.css'

export default class Tool extends Component {
    render() {
        const t = this.props.tool
        return (
            <>
                <link rel="stylesheet" href="App.css"></link>

                <a href="/" id="card" className="card text-dark" style={{ width: "18rem" }}>
                    <img src={t.item_image} className="card-img-top" alt={t.item_name} />
                    <div className="card-body">
                        <h5 className="card-title">{t.item_name}</h5>
                        <p className="card-text">Model: {t.item_model}</p>
                        <button href="/" type="button" className="btn btn-success">Add to Cart</button>
                    </div>
                </a>
            </>
        )
    }
}
