import axios from 'axios';

class AddressBookService {
        baseUrl = "http://localhost:8081/addressbook";
    
        addAddressBookData(data){
            return axios.post(`${this.baseUrl}/add`,data);
        }
        
    
        getAddressBookData(){
            return axios.get(`${this.baseUrl}/get`);
        }
    
        getAddressBookById(employeeId){
            return axios.get(`${this.baseUrl}/get/${employeeId}`)
        }
        editAddressBookData(employee_id,data){
            return axios.put(`${this.baseUrl}/edit/${employee_id}`,data);
        }
    
        deleteAddressBookData(employeeId){
            return axios.delete(`${this.baseUrl}/remove/${employeeId}`);
        }
    
    }
    export default new AddressBookService();