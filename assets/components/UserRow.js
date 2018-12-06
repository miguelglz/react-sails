import React from 'react';
import { Table } from 'reactstrap';

const UserTable = (props) => ( 
  <tr style={styles.row}>
    <th style={styles.cellSmall}>{props.data.id}</th>
    <td style={styles.cell}>{props.data.name}</td>
    <td style={styles.cell}>{props.data.phone}</td>
    <td style={styles.cell}><a href={props.data.picture}><img src={props.data.thumbnail} /></a></td>
  </tr>
);

const styles = {
	row: {
		display: 'flex',
		alignItems: 'center',
	},
	cell: {
		flex: 3,
	},
	cellSmall: {
		flex: 1,
	},
}

export default UserTable;