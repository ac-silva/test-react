import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import UserHandler from '../../api/UserHandler';
import './userlist.scss';
import {Link} from 'react-router-dom';

export default function UserList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserHandler().getUsers().then((users) => {
      setUsers(users);
    });
  }, []);
 
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
    </div>
  )
}