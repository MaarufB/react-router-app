import { useLocation, NavLink } from "react-router-dom";

export default function QueryNavLink({ to, ...props }){
    let location = useLocation();
    // console.log(`to: ${to}`);
    // console.log(`${location.search}`)
    return <NavLink to={to+location.search} {...props} />
}


// Like useSearchParams, useLocation returns a location that 
// tells us information about the URL.A location looks something like this:

// {
//     pathname: "/invoices",
//     search: "?filter=sa",
//     hash: "",
//     state: null,
//     key: "ae4cz2j"
// }