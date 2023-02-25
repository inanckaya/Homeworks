import React from "react";

function Add() {
    const addSupplier = () => {
        let id = document.getElementById('id').value;
        let contactName = document.getElementById('contactName').value;
        let companyName = document.getElementById('companyName').value;
        let city = document.getElementById('city').value;

        let data = {
            id: id,
            contactName: contactName,
            companyName: companyName,
            address: {
                city: city
            }
        }
        fetch("https://northwind.vercel.app/api/suppliers", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => {

                alert('Eklendi')
            });
    }
    return (<>
            <label>ID</label>
            <input type={"text"} id={"id"}/>
            <br/>
            <label>Contact Name</label>
            <input type={"text"} id={"contactName"}/>
            <br/>
            <label>Company Name</label>
            <input type={"text"} id={"companyName"}/>
            <br/>
            <label>City</label>
            <input type={"text"} id={"city"}/>
            <br/>
            <button onClick={() => addSupplier()}>Ekle</button>
        </>
    );
}

export default Add;