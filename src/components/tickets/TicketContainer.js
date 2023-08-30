import { useState } from "react"
import { TicketSearch } from "./TicketSearch.js"
import { TicketList } from "./TicketList.js"

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <TicketSearch setterFunction={setSearchTerms} />
    <TicketList searchTermState={searchTerms} />
</>

}