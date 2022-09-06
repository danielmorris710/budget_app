import {getBills} from '../services/budget_api'
import {useState, useEffect} from 'react'
import Create from './CreateBill'
import {useNavigate} from 'react-router-dom'

export default function Todos() {
    const nav = useNavigate()   
    const [bills, setBills] = useState([])
    useEffect(()=>{ getBills()
        .then(res => setBills(res.data))
    },[bills])

    return(
    <div>
        <table className='Bills' class="table table-secondary table-hover">
            <thead>
                <tr>
                    <th> Bill </th>
                    <th> Amount </th>
                    <th> Due Date </th>
                    <th> Paid Status </th>
                    <th>  </th>
                </tr>
            </thead>
            {bills.map((bill) => {
                
                    return (
                    <tbody >
                        <tr>
                            <td>{bill.description}</td>
                            <td>$ {bill.amount}</td>
                            <td>{bill.date}</td>
                            <td><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={bill.paid}/></td>
                            <td><button class="btn btn-outline-success" onClick= {() => {nav(`/${bill._id}`)}}>See Bill</button></td>
                        </tr> 
                    </tbody>    
                   )
                
            })}
        </table>
        {<Create />}
    </div>
    )
    
}