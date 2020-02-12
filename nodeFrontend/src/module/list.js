import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class listComponent extends React.Component  {
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
            <td>foto aqui</td>
            <td>
              <button class="btn btn-outline-info "> Edit </button>
            </td>
            <td>
              <button class="btn btn-outline-danger "> Delete </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default listComponent;