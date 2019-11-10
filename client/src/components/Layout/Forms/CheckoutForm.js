import React, { Component } from "react";

class CheckoutForm extends Component {
  state = {
    fullname: null,
    email:null,
    address:null,
    apt: null
  
  };

  //CORREGIR VALUE DE INPUT, SE BLOQUEA AL SER CONTROLADO

  _changeHandler = e => {
    console.log('change')
    let obj = {};
    if (e.target.name) {
      obj = {[e.target.name]:e.target.value}
    } else return;
    this.setState(obj);
  };

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col">
            <label>Nombre completo</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              className="form-control"
              value={this.state.fullname}
              placeholder="Nombre completo"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={this.state.email}
              placeholder="Email"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label>Teléfono</label>
            <input
              name="phone"
              type="text"
              className="form-control"
              value={this.state.email}
              placeholder="Número de teléfono"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-8">
            <label>Dirección</label>
            <input
              name="address"
              type="text"
              className="form-control"
              value={this.state.address}
              onChange={this._changeHandler}
              placeholder="Dirección"

            />
          </div>
          <div className="form-group col-4">
            <label>Dpto. <i>(Opcional)</i></label>
            <input
              name="apt"
              type="text"
              className="form-control"
              value={this.state.apt}
              onChange={this._changeHandler}
              placeholder="Nº de dpto."

            />
          </div>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
