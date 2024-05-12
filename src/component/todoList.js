import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
//import fetchAllUser from '../services/UserService';
import EditUser from "./EditUser"
const TodoList = (props) => {

    const [dataUserEdit, setDataUserEdit] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState({});
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [listUsers, setListUser] = useState()
    useEffect(() => {
       const fetchAllUser = async() => {
            try {
                const res = await axios.get('https://reqres.in/api/users?page=2')
                setListUser(res.data)
            } catch(error){
                console.log(error)
            }
       };
       fetchAllUser()
    },[])
    const handleClose = () => {
        setIsShowModalEdit(false)

    }
    const handleEditUser = (user) => {
        setDataUserEdit(user);
    };

    const handleDeleteUser = (user) => {
        setDataUserDelete(user)
    };  
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first Name</th>
                        <th>last name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                {listUsers && Object.keys(listUsers).length && listUsers.data.map((item, index) => {
                        return(<>
                            <tr key ={`users - ${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>
                    <button class='btn btn-warning mx-3'
                            onClick={() => handleEditUser(item)}
                            >
                      Edit
                    </button>
                    <button class='btn btn-danger'
                            onClick={() => handleDeleteUser(item)}
                    >
                      Delete
                    </button>
                  </td>
                            </tr>
                        </>)
                    })
                    }

                </tbody>
            </Table >
            <EditUser 
                handleClose = {handleClose}
                dataUserEdit = {dataUserEdit}
                show = {isShowModalEdit}
            />
        </>
    );
};

export default TodoList; 