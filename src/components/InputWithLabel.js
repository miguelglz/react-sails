import React from 'react';
import { Label, Input } from 'reactstrap';

class InputWithLabel extends React.Component {
  render() {
    return (
      <Label>
        {this.props.label}
        <Input type={this.props.type} name={this.props.name} placeholder={this.props.label} />
      </Label>
    );
  }
}

export default InputWithLabel;