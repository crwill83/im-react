import React from 'react'

export default function SignUp() {

    const sendToFlask = async ( e ) => {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5000/api/signup", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username:e.target.username.value,
                email:e.target.email.value,
                pw1:e.target.pw1.value,
                pw2:e.target.pw2.value,
            })
        });
        const data = await res.json();
        console.log(data)
    };

    return (
        <div className='border col-3' style={{margin:'auto', padding:'20px', 'border-radius':'5px'}}>
            <form onSubmit={(e)=>sendToFlask(e)}>
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input name="username" type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="pw1" className="form-label">Password</label>
                    <input name="pw1" type="password" className="form-control" id="pw1" />
                </div>
                <div className="mb-3">
                    <label for="pw2" className="form-label">Confirm Password</label>
                    <input name="pw2" type="password" className="form-control" id="pw2" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
