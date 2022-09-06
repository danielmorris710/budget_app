import { useNavigate } from "react-router-dom"
import {createBill} from '../services/budget_api'

function Create() {

    const nav = useNavigate()
    
    const createTheBill = e => {
        const bill = {description: e.target.description.value, amount:e.target.amount.value, date: e.target.date.value, paid: false}
        createBill(bill)
        nav('/')
    }

    return(
        <div>
        <center>  
            <form className="forms" id="add-bill" onSubmit={createTheBill}>
                <h1> Add Bill </h1>
                <input type= 'text' name= 'description' id= 'dsc' placeholder="New Bill"/>
                <input type= 'text' name= 'amount' id= 'dsc'placeholder="Amount"/>
                <input type= 'text' name= 'date' id= 'dsc'placeholder="Date ex. month/day"/>
                <input type= 'submit' class="btn btn-outline-primary" />
            </form>
        </center>
        </div>
    )
}

export default Create