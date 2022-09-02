import "./AddressBookForm.css";
import logo from '../../Assests/icon.png'
import AddressBookService from "../../service/AddressBookService";
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


    const AddressBookForm = (props) => {
        let initialValue = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phoneNumber: '',
            email: '',
            id: '',
            isUpdate: false,
            error: {
                firstName: '',
                lastName: '',
                address: '',
                state: '',
                city: '',
                zip: '',
                email: '',
            }
        }
        
        const [formValue, setForm] = useState(initialValue);
    const params = useParams();
    
       useEffect(() => {
        console.log(params.id);
        if (params.id) {
            getAddressBookById(params.id);
        }
      }, [params.id]);

      const getAddressBookById = (id) => {
        AddressBookService
          .getAddressBookById(id)
          .then((data) => {
            let obj = data.data.data;
            setData(obj);
          })
          .catch((err) => {
            alert("error is ", err);
          });
      };

      const setData = (obj) => {
         setForm({
           ...formValue,
           ...obj,
           id: obj.personId,
           firstName: obj.firstName,
           lastName: obj.lastName,
           address: obj.address,
           state: obj.state,
           city: obj.city,
           zip: obj.zip,
           phoneNumber: obj.phoneNumber,
           email: obj.email,
           isUpdate: true,
           phoneNumber: obj.phoneNumber,
         });
       };
       
     const changeValue = (event) => {
         setForm({ ...formValue, [event.target.name]: event.target.value })
 
     }
 
    const save = async (event) => {
        event.preventDefault();
        
        let object = {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            phoneNumber: formValue.phoneNumber,
            email: formValue.email,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zip: formValue.zip
          };
          if (formValue.isUpdate) {
            AddressBookService
              .editAddressBookData(params.id,object)
              .then((data) => {
                  var answer =  window.confirm("Data once modified cannot be restored!! Do you wish to continue?",data);
                  if(answer === true){
                    alert("Data updated successfully!");
                    //props.history.push("");
                  }else{
                      window.location.reload();
                  }
              })
            //   .catch((error) => {
            //     alert.error("WARNING!! Error updating the data!",error);
            //   });
          } else {
            AddressBookService
              .addAddressBookData(object)
              .then((response) => {
                console.log(response);
                alert("Data Added successfully!!",response)
                // props.history.push("");
              })
              .catch(error => {
                console.log(error);
                  alert.error("WARNING!! Error while adding the data!");
              })
        }     
    }
  
    
    const reset = () => {
        setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
    }
    return (
        <div>

            {/* HEADER */}
            <Link to ='/'>
            <header className="header-content header">
            
                <div className="logo-content">
                    <img src={logo} alt="" className="logo-content-img" width="50px" />
                    <div>
                        <span className="addr-text">ADDRESS</span>
                        <br />
                        <span className="addr-text addr-book">BOOK</span>
                    </div>
                </div>
            </header>
            </Link>

            <div className="form-content">
                <form className="form"  action="#" onReset={reset} onSubmit={save}>
                    <div className="form-head-content">
                        <div className="form-head">Person Address Form</div>
                        <div className="form-logo-content">
                            {/* <Link to="/home">
                                <img src="../Assets/icon.png" style={{ height: "25px" }} />
                            </Link> */}
                        </div>
                    </div>
                    <div className="row-content">

                        {/* FIRSTNAME */}

                        <label className="label text" htmlFor="firstName">  First Name  </label>
                        <input
                            className="input"
                            type="text"
                            name="firstName"
                            id="fistName"
                            value={formValue.firstName} 
                            onChange={changeValue}
                            placeholder="Your name.." 
                            required
                        />
                        <error-output className="name-error" htmlFor="text" />
                    </div>
                    

                   <div className="row-content">
                   {/* Last Name */}

                  <label className="label text" htmlFor="lastName">  Last Name  </label>
                   <input
                   className="input"
                   type="text"
                   name="lastName"
                   id="lastName"
                   value={formValue.lastName} 
                   onChange={changeValue}
                   placeholder="Your name.." 
                   required
                  />
                 <error-output className="name-error" htmlFor="text" />
                 </div>

                   
                

                    {/* ADDRESS */}

                    <div className="row-content">
                        <label className="label text" htmlFor="address"> Address </label>
                        <textarea
                            className="input"
                            id="address"
                            name="address"
                            value={formValue.address} 
                            onChange={changeValue}
                            style={{ height: "100px" }}
                            />

                    </div>

                    {/* CITY */}

                    <div className="row-content-exp">
                        <div className="oneRow-content">
                            <label className="label text" htmlFor="city"> City  </label>
                            <select
                                className="select-input"
                                id="city"
                                name="city"
                                typeof="text"
                                value={formValue.city}
                                onChange={changeValue}
                                required
                            >
                                <option value selected disabled hidden> Select City </option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Bhubneswa">Bhubneswar</option>
                                <option value="Cuttack">Cuttack</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Mumbai">Navi Mumbai</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Patna">Patna</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Vaishali">Vaishali</option>
                                <option value="Ramgarh">Ramgarh</option>
                                <option value="Hajipur">Hajipur</option>
                            </select>
                        </div>

                        {/* STATE */}

                        <div className="oneRow-content">
                            <label className="label text" htmlFor="state"> State </label>
                            <select
                                className="select-input"
                                id="state"
                                name="state"
                                value={formValue.state}
                                onChange={changeValue}
                                required
                            >
                                <option value selected disabled hidden> Select State </option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands"> Andaman and Nicobar Islands </option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli"> Dadar and Nagar Haveli </option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>

                        {/* ZIP */}

                        <div className="oneRow-content">
                            <label className="label text" htmlFor="zip"> Zip </label>
                            <input
                                className="input"
                                type="text"
                                name="zip"
                                id="zip"
                                value={formValue.zip}
                                onChange={changeValue}
                                required
                            />
                        </div>
                    </div>

                    {/* PHONE NUMBER */}

                    <div className="row-content">
                        <label className="label text" htmlFor="phone"> Phone Number </label>
                        <input
                            className="input"
                            type="text"
                            name="phoneNumber"
                            id="phone"
                            value={formValue.phoneNumber}
                            onChange={changeValue}
                            required
                        />
                        <error-output className="phone-error" htmlFor="text" />
                    </div>

                    {/* EMAIL */}

                    <div className="row-content">
                        <label className="label text" htmlFor="email"> Email </label>
                        <input
                            className="input"
                            type="text"
                            name="email"
                            id="email"
                            value={formValue.email}
                                onChange={changeValue}
                            required
                        />
                        <error-output className="email-error" htmlFor="text" />`
                    </div>

                    {/* BUTTONS */}

                    <div className="add-reset">
                        <button  type="submit" className="button addButton" id="submitButton">{formValue.isUpdate ? 'Update' : 'Submit'}
                        </button>
                        <button type="reset" className="resetButton button">Reset </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
export default AddressBookForm