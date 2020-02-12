import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class EditComponent extends React.Component{
 render(){
   let userId = 0;
   //let userId = this.props.match.params.employeeId;
   return (
     <form>
       <div class="form-row justify-content-left">
         <div class="form-group col-md-8">
           <label for="inputPassword4">Name {userId}</label>
           <input type="text" class="form-control"  placeholder="Name"/>
         </div>
         
       </div>
       <div class="form-row justify-content-left">
        <div class="form-group col-md-12">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
       </div>
      
       <div class="form-group">
         <label for="inputAddress">Foto</label>
         <input type="file" class="form-control-file" id="inputImagem" name="foto" onchange="preview(this);"></input>
       </div>
        <br></br>
       <button type="submit" class="btn btn-primary">Cadastrar</button>
     </form>
   );
 }
}


export default EditComponent;