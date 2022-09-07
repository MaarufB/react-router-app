import { 
    useSearchParams, 
    NavLink, 
    Outlet 
} from "react-router-dom"

import { getInvoices } from "../data"
import QueryNavLink from "./queryNavlink";


export default function Invoices(){
    // call all the invoices from data.js
    let invoices = getInvoices();
    //Check this out, as the user types:
    //setSearchParams() is putting the ? filter =... search params in the URL and rerendering the router.
    //useSearchParams is now returning a URLSearchParams with "filter" as one of its values.
    //We set the value of the input to whatever is in the filter search param(it's just like useState but in the URLSearchParams instead!)
    //We filter our list of invoices based on the filter search param.
    
    let [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <div style={{ display: "flex" }}>
            <nav style={{ 
                borderRight: "solid 1px",
                padding: "1rem"
                }}>

                <input 
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter){
                            setSearchParams({filter});
                        } else {
                            setSearchParams({});
                        }
                    }}
                
                />
                
                {invoices
                    .filter((invoice) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        // <NavLink
                        //     style={({ isActive }) => ({
                        //         display: "block",
                        //         margin: "1rem 0",
                        //         color: isActive ? "red" : "",
                        //     })}
                        //     to={`/invoices/${invoice.number}`}
                        //     key={invoice.number}
                        // >
                        //     {invoice.name}
                        // </NavLink>

                        <QueryNavLink
                            style={({ isActive }) => ({
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            })}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </QueryNavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    )
}