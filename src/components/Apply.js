import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Apply extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#F4F7FA";
  }
  render() {
    return (
      <div className='container' style={{ margin: "50px auto" }}>
        <h1 className='head text-center'>Loan Application Form</h1>
        <div className='top-list'>
          <div className='list-item active'>Request Details</div>
          <div className='list-item'>Confirmation</div>
          <div className='list-item'>Personal Information</div>
          <div className='list-item'>Contact Information</div>
          <div className='list-item'>Employment Information</div>
        </div>
        <div className='pannel'>
          <p classNam='pannel-title' style={{ marginBottom: "40px" }}>
            Kindly provide the amount you want and your preferred duration
          </p>
          <Form>
            <div class='row'>
              <div class='col'>
                <FormGroup>
                  <Label>Amount</Label>
                  <Input
                    style={{ width: "100%", height: "60px" }}
                    type='text'
                    class='form-control'
                  />
                </FormGroup>
              </div>
              <div class='col'>
                <FormGroup>
                  <Label>Duration</Label>
                  <select
                    style={{
                      width: "100%",
                      height: "60px",
                      border: "#CED4DA 1px solid",
                      borderRadius: "0.25rem"
                    }}
                  >
                    <option value='2'></option>
                    <option value='2'>2 Months</option>
                    <option value='2'>3 Months</option>
                    <option value='2'>4 Months</option>
                    <option value='2'>5 Months</option>
                    <option value='2'>6 Months</option>
                    <option value='2'>7 Months</option>
                    <option value='2'>8 Months</option>
                    <option value='2'>9 Months</option>
                    <option value='2'>10 Months</option>
                    <option value='2'>11 Months</option>
                    <option value='2'>12 Months</option>
                  </select>
                </FormGroup>
              </div>
            </div>
            <Button
              className='btn-lg'
              style={{
                backgroundColor: "#F46A29",
                borderColor: "#F46A29",
                marginTop: "60px"
              }}
            >
              Proceed
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Apply;
