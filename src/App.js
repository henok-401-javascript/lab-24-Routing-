import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import If from './components/If/if';
import Form from './components/form/form';
import Result from './components/results/results';
import History from './components/history/history';
import Header from './components/header/header';


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

  submitHandler(e){
    let request = {
      url:this.state.url,
      method:this.state.method,
      header:this.state.header,
      body:this.state.body,
    }

    this.setState({history:[...this.state.history ,request]});
// fetch data from api call 
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
<If 
condition={this.state.headerResponse ||
   this.state.bodyResponse}>

     <Result 
     header={this.state.headerResponse} 
     body={this.state.bodyResponse} 
     tabwidth={5}/>
</If>


<History size='size' history={this.state.history}/>
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
