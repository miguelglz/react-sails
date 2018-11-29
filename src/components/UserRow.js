import React from 'react';
import { Table } from 'reactstrap';

const UserTable = (props) => ( 
  <tr>
    <th scope="row">{props.data.id}</th>
    <td>{props.data.name}</td>
    <td>{props.data.phone}</td>
    <td>{props.data.picture}</td>
  </tr>
);

export default UserTable;