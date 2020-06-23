import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import If from './components/If/if';
import Form from './components/form/form';
import Result from './components/results/results';
import History from './components/history/history';
import Header from './components/header/header';
import  './style/style.scss';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        url:'',
        method:'GET',
        header:'',
        body:'',
        headerResponse:'',
        bodyResponse:'',
        history:[],
        loading:false,
        
      
    }
  }
  handleUrl(e){
this.setState({...this.state,url:e.target.value});
  }
  onMethodHandler(e){
    this.setState({method:e.target.value});
  }
  onBodyChange(e){
    this.setState({...this.state,body:e.target.value});
  }
  onHeaderChange(e){
    this.setState({...this.state,header:e.target.value});
  }
 async renderHandler(e){
await this.setState({url:e.url,body:e.body,method:e.method,header:e.header});
await this.submitHandler();
  }

  async submitHandler(e){
    await this.setState({loading:true});
    let request = {
      url:this.state.url,
      method:this.state.method,
      header:this.state.header,
      body:this.state.body,
    }

    await this.setState({history:[...this.state.history ,request]});
// fetch data from api call 

let resHeader = {};
let resBody = {};

let res = await fetch(this.state.url, {
  method:this.state.method,
  body:this.state.method ==='GET' ?null : JSON.parse(this.state.body),
  header:{...JSON.parse(this.state.header) , Accept:'application.json'},
});
if(res.status === 200){
  resBody = await res.json();

  for(const entry of res.header.entries()){
    resHeader[entry[0]] = entry[1];
  }
}
resBody = await res.json();
  this.setState({loading:false, headerResponse:resHeader , bodyResponse:resBody});




  }

  render(){
    console.log('state',this.state);
    return (
      <div className="App">
     <BrowserRouter>
     <Header/>
     <Route path='/' exact>
     <Form 
     url={this.state.url}
     header={this.state.header}
     body={this.state.body}
     handleUrl={this.handleUrl.bind(this)}
     onMethodHandler={this.onMethodHandler.bind(this)}
     onBodyChange={this.onBodyChange.bind(this)}
     onHeaderChange={this.onHeaderChange.bind(this)}
     submitHandler={this.submitHandler.bind(this)}
     />
<History size='size' history={this.state.history}/>

<If condition={this.state.loading}>
<h4>loading....</h4>
</If>

<If 
condition={this.state.headerResponse ||
   this.state.bodyResponse}>

     <Result 
     header={this.state.headerResponse} 
     body={this.state.bodyResponse} 
     tabwidth={5}/>
</If>



     </Route>
   
     <Route path='/history' exact>
     <History history={this.state.history}/>
     </Route>

     </BrowserRouter>
      </div>
    );
  }
}

export default App;
