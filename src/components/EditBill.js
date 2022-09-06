import {getBill, editBill} from '../services/budget_api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {

    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getBill(id)
        .then(res => setData(res.data))
    }, [])

    const editTheBill = e => {
        e.preventDefault()
        const updatedBill = {
            description: e.target.description.value,
            amount: e.target.amount.value,
            date: e.target.date.value, 
            paid : e.target.paid.checked}
        editBill(id, updatedBill)
        nav(`/${id}`)
    }
    return(
        <div>
            
            <form className='forms' onSubmit={editTheBill}> <h1> Edit Bill </h1>
                <input type= 'text' name= 'description' defaultValue={data.description}/>
                <input type= 'text' name= 'amount' defaultValue={data.amount}/><input type= 'text' name= 'date' defaultValue={data.date}/>
                Paid: <input class="form-check-input" type= 'checkbox' name= 'paid' defaultChecked= {data.paid}/>
                <input type= 'submit' class="btn btn-outline-primary"/>
            </form>
            
        </div>
    )
}

export default Edit