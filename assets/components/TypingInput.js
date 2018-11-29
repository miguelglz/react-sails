import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormGroup } from 'reactstrap';

const TypingInput = (props) => ( 
    <FormGroup>
    	<Label> {props.title} </Label>
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.description}
        value={props.content}
        onChange={props.handleFunction}
      />
    </FormGroup>
);

TypingInput.propTypes = {  
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  description: PropTypes.string,
};

export default TypingInput;