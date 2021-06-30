import React from 'react';
import { withRouter } from "react-router";
import {connect} from 'react-redux';
import store from './redux/configStore';
import styled from 'styled-components';

const mapStateToProps = (state) => ({
    state,
  });

class Detail extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.state.abc.x)
    }

    componentDidMount(){
        console.log(this.props.state)
    }

    render() {
        return(
            <Div>
            <h1>MyDictionary</h1>
            {this.props.state.abc.x===undefined ? <p>새로고침하면 뜸</p>:<div>
                {this.props.state.abc.x.map((list, index) => {
                return (
            <Background key={index}>{list[index]}</Background>
                )
            })}
                </div>}
            
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