import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserHandler from '../../api/UserHandler';
import Table from '../../components/Table';
import './userview.scss'

export default function UserView(props) {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserHandler().getUser(userId).then((user) => {
      setUser(user);
    })
  }, []);

  return (
    <div className="container">
      <Link to="/user-list" className="back-button"><i className="fa fa-arrow-circle-left"></i></Link>
      {
        (user) ?
          <Table className="table-bordered" >
            <tbody>
              <tr><td>Nome</td><td>{user.name}</td></tr>
              <tr><td>Username</td><td>{user.username}</td></tr>
              <tr><td>Email</td><td>{user.email}</td></tr>
            </tbody>
          </Table> :
          (<h3>Usuário não encontrado!</h3>)
      }
    </div>
  );
}