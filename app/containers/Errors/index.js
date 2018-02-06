import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './index.scss';

class Errors extends PureComponent {
	render(){

		const { message } = this.props;

		if(!message){
			return null;
		}

		return (
			<div className="show-errors">
				{this.props.message}			
			</div>
		)
	}
}

const mapStateToProps = state => ({
	message: state.Error && state.Error.message
})


export default connect(mapStateToProps)(Errors);