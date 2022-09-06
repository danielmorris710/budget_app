// this file will be our endpoint routes
import axios from 'axios'
const baseURL ='http://localhost:3001/bills'

export const getBills = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

export const getBill = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL) 
    return response
}

export const deleteBill = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}

export const editBill = (id, updatedBill) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedBill)
    return response
}

export const createBill = (bill) => {
    const URL = baseURL
    const response = axios.post(URL, bill)
    return response
}