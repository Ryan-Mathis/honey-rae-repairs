import { CustomerNav } from "./CustomerNav.js"
import { EmployeeNav } from "./EmployeeNav.js"

export const NavBar = () => {
	
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    
    if (honeyUserObject.staff) {    
        return <EmployeeNav />
    }
    else {
        return <CustomerNav />
    }

}