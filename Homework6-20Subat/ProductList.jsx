import React, {useState} from 'react'
import { products } from './data/products'
import './App.css'

function ProductTable() {
    const [productList, setproductList] = useState(products);
    const [name, setname] = useState('')

    let a = [];
    productList.forEach(function (product) {
        if (product.unitsInStock !== 0) {
            a.push(product);
        }
    })
    console.log(a)
    return (<>
        <h1>Products Length: {a.length}</h1>
        <table className='w3-table w3-striped w3-border'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
            </tr>
            </thead>
            <tbody>
            {
                a.map(product => {
                   let background = (product.unitPrice >= 20 ? 'red' : 'transparent')
                    return <tr key={product.id} className={background}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.unitsInStock}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.quantityPerUnit}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </>)
}

export default ProductTable