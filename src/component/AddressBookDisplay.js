import { useNavigate } from "react-router-dom";
import "../component/AddressBookHome/AddressBookHome.css";
// import deleteIcon from "../../Assets/delete-black-18dp.svg";
import deleteIcon from "../Assests/delete-black-18dp.svg";
// import editIcon from "../Assets/create-black-18dp.svg";
import editIcon from "../Assests/create-black-18dp.svg";
import AddressBookService from "../service/AddressBookService";


const Display = (props) => {
  let navigate = useNavigate();
  const update = (employeeId) => {
    console.log(employeeId);
    navigate(`update-addressbook/${employeeId}`);
  };

  const remove = (employeeId) => {
    var answer = window.confirm(
      "Data once deleted cannot be restored!! Do you wish to continue ?"
    );
    if (answer === true) {
      AddressBookService.deleteAddressBookData(employeeId).then((res) => {
        alert("Data deleted Successfully!!");
        window.location.reload();
        props.getAddressBookData();
      });
    } else {
      window.location.reload();
    }
  };

  return (
    <table id="table-display" className="table" border="2px" >
      <tbody>
        <tr key={-1} border="2px">
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>ZipCode</th>
          <th>Actions</th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element) => (
            <tr key={element.employeeId}>
              <td>{element.id}</td>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
              <td>{element.email}</td>
              <td>{element.phoneNumber} </td>
              <td>{element.address}</td>
              <td>{element.city}</td>
              <td>{element.state}</td>
              <td>{element.zip}</td>
              <td>
                <img
                  onClick={() => remove(element.id)}
                  src={deleteIcon}
                  alt="delete"
                />
                <img
                  onClick={() => update(element.id)}
                  src={editIcon}
                  alt="edit"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Display;
