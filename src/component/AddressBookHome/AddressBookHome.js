import "./AddressBookHome.css";
import { Link } from "react-router-dom";
import AddressBookDisplay from "../AddressBookDisplay";
import Header from "../header/Header";
import React from "react";
import AddressBookService from "../../service/AddressBookService";

// export default function AddressBookHome(props) {
//     const [contacts, setContacts] = useState([]);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  getEmployeeList = () => {
    AddressBookService.getAddressBookData()
      .then((response) => {
        console.log("Data Added Successfully", response.data);
        this.setState({
          employeeList: response.data.data,
          count: response.data.data.length,
        });
      })
      .catch((error) => console.log("Error Encountered!"));
  };

  componentDidMount() {
    localStorage.removeItem("editEmp");
    this.getEmployeeList();
  }

  render() {
    return (
      <div>
        <Header />

        <div className="navbar navbar-xpand-md">
          <ul>
            <li className="nav-item">
              <a className="add-button" href="/address-form">
                Add User
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1>Personal Details</h1>
          <div>
            <AddressBookDisplay employeeArray={this.state.employeeList} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
