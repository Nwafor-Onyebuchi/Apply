import React from "react";
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap";

class Apply extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#F4F7FA";
  }
  render() {
    return (
      <section className='container' style={{ marginTop: "70px" }}>
        <div className='row'>
          <div className='col-md-4'>
            <Form className='pannel'>
              <FormGroup className='form-group'>
                <Label for='exampleInputEmail1'>Email address</Label>
                <Input
                  required
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </FormGroup>
              <FormGroup className='form-group'>
                <Label for='exampleInputPassword1'>DTI</Label>
                <Input
                  required
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </FormGroup>
              <FormGroup className='form-group'>
                <Label for='exampleInputPassword1'>Tenure</Label>
                <Input
                  required
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </FormGroup>
              <FormGroup className='form-group'>
                <Label for='exampleInputPassword1'>Max Amount</Label>
                <Input
                  required
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </FormGroup>

              <Button
                type='submit'
                className='btn-block'
                style={{ backgroundColor: "#B775BA", border: "#B775BA" }}
              >
                Save
              </Button>
            </Form>
            <FormGroup className='mt-5'>
              <Input
                accept='image/png,image/jpeg'
                id='file'
                type='file'
                className='inputfile'
              />
              <Label htmlFor='file' className='label'>
                Upload a file
              </Label>
            </FormGroup>
          </div>
          <div className='col-md-8'>
            <Table class='table table-bordered table-responsive container'>
              <thead
                className='thead-dark table-header'
                style={{ backgroundColor: "#f46a29" }}
              >
                <tr>
                  <th scope='col'>S/N</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>DTI</th>
                  <th scope='col'>Tenure</th>
                  <th scope='col'>MAX</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>--</td>
                  <td>
                    <Button className='btn btn-xs btn-info mr-1'>Edit</Button>
                    <Button className='btn btn-xs btn-danger'>
                      Deactivate
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>--</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>--</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    );
  }
}

export default Apply;
