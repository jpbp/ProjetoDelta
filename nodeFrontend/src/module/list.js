import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'

class listComponent extends React.Component  {

  constructor(props){
    super(props)
    this.state={
      listAluno:[]
    }
  }

  componentDidMount(){
    const url = "http://localhost:3000/Aluno/list"
    axios.get(url).then(res=>{
      if(res.data.sucess){
        const data = res.data.data
        this.setState({listAluno:data})
      }else{
        alert('Error do servidor')
      }
    }).catch(error=>alert('Error server'+error))
  }
  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th colspan="3">Imagem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>John Smitth</td>
            <td>California</td>
            <img id="color" height='30' width='30' src="https://www.estudokids.com.br/wp-content/uploads/2017/07/sou-aluno-infantil-por-que-nao-devo-apontar-o-lapis-com-estilete.jpg" />
            <td>
              <button class="btn btn-outline-info "> Edit </button>
            </td>
            <td>
              <button class="btn btn-outline-danger "> Delete </button>
            </td>
          </tr>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  
  loadFillData(){
  return this.state.listAluno.map((data)=>{
    var arrayBufferView = new Uint8Array( data.imagem['data'] );
    var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    var urlCreator = window.URL || window.webkitURL;
    this.imageUrl = urlCreator.createObjectURL( blob );

    
      return (<tr>
        <th>{data.id}</th>
        <td>{data.nome}</td>
        <td>{data.endereco}</td>
        <td><img src={this.imageUrl} width='50' height='50'/></td>
        <td>
          <button class="btn btn-outline-info "> Edit </button>
        </td>
        <td>
          <button class="btn btn-outline-danger "> Delete </button>
        </td>
      </tr>)
    })
  }
}

export default listComponent;