import React, {useEffect, useState} from 'react'


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadSuppliers();
    }, []);


    const loadSuppliers = () => {
        fetch("https://northwind.vercel.app/api/suppliers")
            .then(response => response.json())
            .then(response => {
                setProducts(response);
                setLoading(false)
            })
    }

    const deleteSupplier = (id) => {
        fetch("https://northwind.vercel.app/api/suppliers/" + id, {
            method: 'DELETE'
        })
            .then(() => {
                loadSuppliers();
            });
    }
    return (<>
        {

            loading ? <h1>loading...</h1> : <table className='w3-table w3-striped w3-border'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Contact Name</th>
                    <th>Company Name</th>
                    <th>City</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    products && products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.contactName}</td>
                            <td>{item.companyName}</td>
                            <td>{item.address.city}</td>
                            <td>
                                <button onClick={() => deleteSupplier(item.id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        }


    </>)
}

export default Home