import { Link } from "react-router-dom"

export const Customer = ({customerObj}) => {
    return <section className="customer">
        <div>
            Name:<Link to={`/customers/${customerObj.id}`}> {customerObj.fullName}</Link>
        </div>
        <div></div>
    </section>
}