import React from 'react';
import { Table } from 'reactstrap';

const UserTable = (props) => ( 
  <tr>
    <th scope="row">{props.data.id}</th>
    <td>{props.data.name}</td>
    <td>{props.data.phone}</td>
    <td><a href={props.data.picture}><img src={props.data.thumbnail} /></a></td>
  </tr>
);

export default UserTable;