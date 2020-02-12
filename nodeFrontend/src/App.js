import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import Form from './module/form';
// import List from './module/list';
// import Edit from './module/edit';

function App() {

  return (
      <div className="App">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.deltagrupo.com.br/deltainova.php" style={{color:'#87cefa',fontWeight:'bold'}}>Delta Grupo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"> Lista de Alunos </a>
              </li>
            </ul>
            <a class="btn btn-info "  href="/form">Adicionar Alunos</a>
          </div>
        </nav>

        <div class="container py-4">
          <div class="row">

            // Add component list, form, edit.

          </div>
        </div>

      </div>
  );
}

export default App;