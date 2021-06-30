import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import Detail from './Detail';
import { withRouter } from "react-router";
import {connect} from 'react-redux';
import {loadAC, createAC} from './redux/modules/bucket77';
import store from './redux/configStore';
import styled from 'styled-components';

const mapStateToProps = (state) => ({
  state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadAC());
  },
  create: (new_item) => {
    dispatch(createAC(new_item));
  }
});

class App extends React.Component {
  constructor(props){
    super(props)
    this.text = React.createRef();
    this.text2 = React.createRef();
    this.text3 = React.createRef();
  }


  addWorld = () => {
    
    const new_item = this.text.current.value;
    const new_item2 = this.text2.current.value;
    const new_item3 = this.text3.current.value;
    const list = [new_item, new_item2, new_item3]
    if(list[0]===""||list[1]===""||list[2]===""){
      window.alert("값을 모두 입력하세요.")
    } else {
      this.props.create(list)
    console.log(this.props.state.abc.list)
    }
    

  }

  render(){
    return (
      
      <Div className="App">
        <Route exact path="/">
        <h1>World Plus</h1>
        <Background>
        <p>world</p><input type="text" ref={this.text}/><br/>
        </Background>
        <Background>
        <p>explain</p><input type="text" ref={this.text2}/><br/>
        </Background>
        <Background>
        <p>example</p><input type="text" ref={this.text3}/><br/>
        </Background>
        <button onClick={this.addWorld}>추가하기</button>
        <div>{this.props.state.abc.x}</div>
        </Route>
        <Route path="/detail" component={Detail}/>
        <Link to ="/detail"><button>추가페이지이동</button></Link>
        <Link to ="/"><button>홈 이동</button></Link>
      </Div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

const Div = styled.div`
max-width: 350px;
margin: 20px auto;
background-color: #EFFBF2;
`;

const Background = styled.div`
background-color: #F8E6E0;
border-radius: 25px;
padding: 10px;
margin 5px;
`;