import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar'
import Resume from './components/Resume/Resume'
import Experiences from './components/Resume/Experiences'

import {musicModel} from './models/ViewModels'
import {observer} from 'mobx-react'
import debounce from 'lodash.debounce'

@observer
class App extends Component {
  constructor(props){
    super(props);
    this.callwithdebounce = debounce( (inpt)=> this.props.appState.getMusics(inpt) ,1000)
  }
  onChangeListener=(text)=>{
    this.callwithdebounce(text.target.value)
  }
  render() {
    var musicarray =[];
    musicarray=this.props.appState.musics.map((item, index)=>{
      return(
        <tr>
          <td>{item.name}</td>
          <td>{item.album.name}</td>
          <td><img  src={item.album.images[2].url} width={item.album.images[2].width} height={item.album.images[2].height} /></td>
          <td>
          <audio controls>
          <source src={item.preview_url} type="audio/mp3" />
        </audio>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <input type="text" onChange={(text)=>this.onChangeListener(text)} />
        <table className="table table-bordered">
          <tbody>
            {musicarray}
          </tbody>
        </table>
        <Navbar />
        <div className="container-fluid p-0">
          <Resume />
          <Experiences title="yener" company="BILGE ADAM" decription="test decription" date="today" />
        </div>
      
      </div>
    );
  }
}

export default App;
