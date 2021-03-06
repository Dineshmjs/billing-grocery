import React, { useState, useEffect } from 'react'
import { http } from '../../axios'

function Products({ reload }) {
    const [data, setData] = useState([])
    // console.log(products)


    useEffect(() => {
        http.get("purches/tempItems")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload])

    var grandTotal = 0;

    return (
        <div>
            <table className="printbill-product-table table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product</th>
                        <th>HSNNO</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Taxable Amount</th>
                        <th>Gst</th>
                        <th>Total</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            grandTotal += data.total



                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.product}</td>
                                    <td>{data.hsnno}</td>
                                    <td>{data.qt}{data.type}</td>
                                    <td>{data.rate}</td>
                                    <td>{data.taxableamount}</td>
                                    <td>{data.gst}%</td>
                                    <td>{data.total}</td>  
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Rs {grandTotal}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Products
