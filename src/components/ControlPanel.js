import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {selectControl} from '../actions/index'

class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    renderButtons() {
        return this.props.controls.map((control) => {
                return (<button key={control.id}
                                className={control.id += control.active ? "active" : ""}
                                onClick={() => this.props.selectControl(control)}>
                </button>)

            }
        )
    }

    render() {
        return (
            <div className="controlPanel">
                {this.renderButtons()}
            </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectControl: selectControl}, dispatch);
}


function mapStateToProps(state) {
    return {
        controls: state.controls
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(ControlPanel)