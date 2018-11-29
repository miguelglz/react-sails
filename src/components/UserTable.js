import React from 'react';
import { Table } from 'reactstrap';
import UserRow from '../components/UserRow';

class UserTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {this.props.usersInfo.map(data => {     
            return (
              <UserRow data={data} />
            ); 
          })}
        </tbody>
      </Table>
    );
  }
}

export default UserTable;