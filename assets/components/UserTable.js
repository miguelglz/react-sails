import React from 'react';
import { Table } from 'reactstrap';
import UserRow from '../components/UserRow';

class UserTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr style={styles.row}>
            <th style={styles.cellSmall}>#</th>
            <th style={styles.cell}>Full Name</th>
            <th style={styles.cell}>Phone Number</th>
            <th style={styles.cell}>Picture</th>
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
  }
}

export default UserTable;