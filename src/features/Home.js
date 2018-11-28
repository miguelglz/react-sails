import React from 'react';
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import InputWithLabel from '../components/InputWithLabel';

const Home = () => (
    <div>
      <Jumbotron>
      	<h1>TDS Sails Assessment</h1>
      	<FormGroup>
	        <InputWithLabel
	          label="Name"
	          name="name"
	          type="text"
	        />
	        <InputWithLabel
	          label="Phone"
	          name="phone"
	          type="number"
	        />
	    </FormGroup>
      </Jumbotron>
    </div>
);

export default Home;