import { 
    useNavigate, 
    useParams, 
    useLocation 
} from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice(){
    
    // parsing the parameter into string that come from the url
    // because url parameters are always string
    //
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return (
        <main style={{ padding: "1rem"}}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}  
            </p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.name);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    );
}