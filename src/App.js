import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import If from './components/If/if';
import Form from './components/form/form';
import History from './components/history/history';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        url:'',
        method:'GET',
        header:{},
        body:{},
    }
  }
  handleUrl(e){
this.setState({...this.state,url:e.target.value});
  }
  onMethodHandler(e){
    this.setState({...this.state, method:e.target.value});
  }
  onBodyChange(e){
    this.setState({...this.state,body:e.target.value});
  }
  onHeaderChange(e){
    this.setState({...this.state,header:e.target.value});
  }

  submitHandler(e){
// fetch data from api call 
  }

  render(){
    console.log('state',this.state);
    return (
      <div className="App">
     <BrowserRouter>
     <Route path='/' exact>
     <Form 
     url={this.state.url}
     header={this.state.header}
     body={this.state.body}
     handleUrl={this.handleUrl.bind(this)}
     onBodyChange={this.onBodyChange.bind(this)}
     onHeaderChange={this.onHeaderChange.bind(this)}
     submitHandler={this.submitHandler.bind(this)}

     
     />
  
     </Route>
     <Route path='/history' exact>
     <History/>
     </Route>
     </BrowserRouter>
      </div>
    );
  }
}

export default App;
