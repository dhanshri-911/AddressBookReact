import axios from 'axios';

class UserService {
    baseUrl = "http://localhost:8081/user";

    addUser(data){
        return axios.post(`${this.baseUrl}/register`,data);
    }
    UserLogin(data){
        return axios.post(`${this.baseUrl}/login`,data);
    }

    getAllEmployees(){
        return axios.get(`${this.baseUrl}/userList`);
    }

    getAddressById(employee_id){
        return axios.get(`${this.baseUrl}/get_by_id/${employee_id}`);
    }

    updateEmployee(employee_id,data){
        return axios.put(`${this.baseUrl}/update/${employee_id}`,data);
    }

    deleteEmployee(employeeId){
        return axios.delete(`${this.baseUrl}/delete_by_id/${employeeId}`);
    }
}
export default new UserService();
