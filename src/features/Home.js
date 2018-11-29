import React from 'react';
import { createStore } from "redux";
import * as actions from '../actions';
import { connect } from 'react-redux';
import { 
	Jumbotron,
	Button,
	FormGroup,
	Label,
	Input,
	Container,
	Row,
	Col,
	Table,
} from 'reactstrap';
import TypingInput from '../components/TypingInput';
import UserTable from '../components/UserTable';

class Home extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	submitting: false,
	    	form: {
	    		name: null,
		    	phone: null,
		    	file: null,
		    	fileUrl: null,
	    	},
	    };
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleClear = this.handleClear.bind(this);
	    this.handleFileChange = this.handleFileChange.bind(this);
	}

	componentDidMount() {
	  this.props.fetchInfo();
	}

	componentDidUpdate(prevProps) {
	  // console.log('prevprops', prevProps.usersInfo);
	  // console.log('userInfo', this.props.usersInfo);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.submitForm(this.state.form);
		this.setState({
			submitting: true
		});
		this.handleClear(e);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			form: {
				...this.state.form,
				[name]: value,
			}
		});
	}

	handleClear() {
		console.log('clearing');
		this.setState({
			submitting: false,
	    	form: {
	    		name: '',
		    	phone: '',
		    	file: null,
		    	fileUrl: null,
	    	},
		});
	}

	handleFileChange(e) {
	  	// const file = e.target.files[0]
	  	e.preventDefault();
    	let file = e.target.files[0];
    	console.log(file)
    	this.setState({
			form: {
				...this.state.form,
				file,
				fileUrl: e.target.value
			}
		});
	}

	render() {
    	return (
		    <Jumbotron>
		      	<Container style={{ marginBottom: '100px' }}>
		      		<Row>
				      	<Col xs="4">
				      		<TypingInput
				      			title="Name"
				      			type="text"
								name="name"
								description="Full Name"
								content={this.state.form.name}
								handleFunction={this.handleChange}
				      		/>
					    </Col>
				      	<Col xs="4">
				      		<TypingInput
				      			title="Phone"
				      			type="number"
								name="phone"
								description="Phone Number"
								content={this.state.form.phone}
								handleFunction={this.handleChange}
				      		/>
					    </Col>
				      	<Col xs="4">
					      	<FormGroup>
								<Label for="picture">Picture</Label>
      							<Input type="file" name="picture" id="picture" onChange={this.handleFileChange} />
						    </FormGroup>
						 </Col>
					</Row>
					<Row>
						<Col>
							<Button onClick={this.handleSubmit}>Submit</Button>
						</Col>
					</Row>
				</Container>

				<h2>Registers</h2>
			    <UserTable usersInfo={this.props.usersInfo} />
		    </Jumbotron>
		);
	}
}

const mapStateToProps = state => {  
    const { usersInfo } = state.form;
    return { usersInfo };
};

export default connect(mapStateToProps, actions)(Home);