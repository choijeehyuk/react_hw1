import React from 'react';
import { withRouter } from "react-router";
import {connect} from 'react-redux';
import store from './redux/configStore';
import styled from 'styled-components';

var arr = [];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr)
// }

const mapStateToProps = (state) => ({
    state,
  });

class Detail extends React.Component {
    constructor(props){
        super(props)
        this.count = this.props.state.abc.list
        console.log(this.count)
        console.log(this.props.state.abc.list)
    }

    componentDidMount(){
        console.log(this.props.state)
    }

    render() {
        return(
            
            <Div>
            <h1>MyDictionary</h1>
            <React.Fragment>

            
            

            <div>
                {this.props.state.abc.list.map((list, index) => {
                return (
            <Background key={index}>{list}</Background>
                )   
              } )}
            </div>




                
            </React.Fragment>
            </Div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(Detail));

const Div = styled.div`
max-width: 350px;
margin: 20px auto;
`;

const Background = styled.div`
background-color: #E0E6F8;
padding: 10px;
border-radius: 10px;
`;