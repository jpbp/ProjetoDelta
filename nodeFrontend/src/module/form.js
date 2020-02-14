import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
class EditComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      campName: "",
      campEmail:"",
      campImagem:""
    }
  }

 render(){

   
  
   return (
     <form>
       <div class="form-row justify-content-left">
         <div class="form-group col-md-8">
           <label for="inputPassword4">Name </label>
           <input type="text" class="form-control"  placeholder="Name" value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}/>
         </div>
         
       </div>
       <div class="form-row justify-content-left">
        <div class="form-group col-md-12">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.campAddress} onChange={(value)=> this.setState({campAddress:value.target.value})}/>
        </div>
       </div>
      
       <div class="form-group">
         <label for="inputAddress">Foto</label>
         <input type="file" name="filetoupload" ></input>
       </div>
        <br></br>
        <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
     </form>
   );
 }
 
 sendSave(){

  
   
   if (this.state.campName=="") {
     alert("Digite o nome!")
  }
  else if (this.state.campAddress=="") {
     alert("Digite o endereço!")
  }
  // else {
  //   //url backend
  //   const baseUrl = "http://localhost:3000/Aluno/create"
  //   console.log('foooooooooooooooooooooooi')
  //   //parametros dos dados dos posts
  //   const datapost = {
  //     nome : this.state.campName,
  //     endereço : this.state.campAddress,
  //     imagem  : this.state.campImagem
  //   }

  //   axios.post(baseUrl,datapost)
  //   .then(response=>{
  //     if (response.data.success===true) {
  //       alert(response.data.message)
  //     }
  //     else {
  //       alert(response.data.message)
  //     }
  //   }).catch(error=>{
  //     alert("Error 34 "+error)
  //   })

  // }

}
}


export default EditComponent;