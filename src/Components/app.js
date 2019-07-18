import React, { Component } from 'react'
import Footer from './Footer'
import { test } from '../Services/test';
import { Toogle_Test } from '../Actions/test';
import { connect } from 'react-redux';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testing: true,
        };
    }

    static getDerivedStateFromProps = (nextProps, state) => {
        // checking if the logged in is true or not 
        return state;
    }

    componentDidMount = () => {
        const { history, dispatch } = this.props;
        console.log('Componnenrt did mount ');
        test().then(resp => {
            console.log('The response here is ---> ', resp);
            dispatch(Toogle_Test)
        }).catch(err => {
            console.log('The err here is ---> ', err);
            // let errorMessages = [];
            // hideMessage();//Hide loader
            // const { errorMessage, errors } = handleErrorResponse(err);
            // message.error(errorMessage)
        });
    }

    handleClick = () => {
        console.log('iam called here ');
        const { dispatch } = this.props;

        dispatch(Toogle_Test);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Hello Prasun</h2>
                    <button onClick={this.handleClick}></button>
                    <h3><i>By: Prasun Jaiswal</i></h3>
                </div>
                <br />
                <Footer name={'Prasun Jaiswal'} />
            </React.Fragment >
        )
    }
}


const mapStateToProps = state => {
    return { testing: !state.testing }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClick: (data) => {
//             dispatch(Toogle_Test)
//         }
//     }
// }

export default connect(mapDispatchToProps)(App);
