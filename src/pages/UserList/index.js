import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import UserHandler from '../../api/UserHandler';
import './userlist.scss';
import {Link} from 'react-router-dom';
import Pagination from '../../components/Pagination';

export default function UserList(props) {
  const qtyUsersPerPage = 5;
  const [users, setUsers] = useState([]);
  const [qtyUsers, setQtyUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const end   = currentPage * qtyUsersPerPage;
    const start = (currentPage === 1) ? currentPage - 1 : (currentPage - 1) * qtyUsersPerPage;
    UserHandler().getUsers(start, end).then((resp) => {
      const {users, total} = resp;
      setUsers(users);
      setQtyUsers(total);
    });
  }, [currentPage]);

  const changePage = function(page){
    return () => {
      setCurrentPage(page);
    }
  }
 
  return (
    <div className="container">
      <Table className="table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th className="align-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="align-center">
                  <Link to={`/user-view/${user.id}`}><i className="fa fa-eye"></i></Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Pagination max={(qtyUsers/qtyUsersPerPage)} onChange={changePage} currentPage={currentPage}/>
    </div>
  )
}