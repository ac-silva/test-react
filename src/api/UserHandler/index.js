import axios from 'axios';

export default function UserHandler() {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'content-type': 'application/json'
    }
  });

  return {

    getUsers: function(start=-1, end=-1){
      const endpoint = (start !== -1 && end !== -1) ? `users/?_start=${start}&_end=${end}` : 'users'; 
      return new Promise((resolve, reject) => {
        api.get(endpoint)
          .then(response => resolve(response.data))
          .catch(reject);
      });
    },

    getUser: function(id){
      return new Promise((resolve, reject) => {
        this.getUsers().then((users) => {
          const user = users.find(user => user.id === parseInt(id));
          (user) ? resolve(user) : reject('Usuário não encontrado');
        }).catch(reject);
      });
    }
    
  }
}