import {getBill, deleteBill} from '../services/budget_api'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function Bill() {
    const nav = useNavigate()
    const {id} = useParams()
    const [bill, setBill] = useState({})
    useEffect(() => {getBill(id)
    .then(res => setBill(res.data))
    }, [bill])

    const deleteTheBill = () => {
        deleteBill(id) 
        nav('/')  
    }

    return (
        <div>
            <h1>{bill.description}'s Bill:</h1>
            <table className='Bill' class="table table-secondary table-hover">
               <thead>
                <tr>
                    <th> Bill </th>
                    <th> Amount </th>
                    <th> Due Date </th>
                    <th> Paid Status </th>
                    <th> Adjust </th>
                </tr>
               </thead> 
               <tbody>
                <tr>
                    <td>{bill.description}</td>
                    <td>${bill.amount}</td>
                    <td>{bill.date}</td>
                    <td><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={bill.paid}/></td>
                    <td> <button class="btn btn-outline-warning" onClick= {() => {nav(`/${id}/edit`)}}>Edit</button>
                <button onClick={deleteTheBill} class="btn btn-outline-danger">Delete</button> </td>
                </tr>    
               </tbody> 
            </table>
            <center>
                <button id='back-btn' class="btn btn-outline-primary" onClick={() => nav('/')}> Back To Main </button>
            </center>
        </div>
    )
}

export default Bill