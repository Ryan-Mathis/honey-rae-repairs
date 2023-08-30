import { useEffect, useState } from "react"
import { Customer } from "./Customer.js"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=false`)
            .then(res => res.json())
            .then ((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )

    return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer--${customer.id}`}
            customerObj={customer} />)
        }
    </article>
}