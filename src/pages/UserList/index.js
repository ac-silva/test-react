import React from 'react';
import Table from '../../components/Table';
import './userlist.scss';

export default function UserList(props) {
  return (
    <Table className="table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>
            <button>View</button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}