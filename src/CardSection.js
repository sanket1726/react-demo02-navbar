import React from 'react'
import Card from './Card'

const CardSection = () =>(
    <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <div className="col-4">
          <Card title="Assaisins" ButtonText="Wohooo" />
        </div>
        <div className="col-4">
          <Card title="Subway" ButtonText="Yeah!!" />
        </div>
        <div className="col-4">
         <Card title="Paris" ButtonText="Hola!!" />
        </div>
      </div>
    </div>
  </section>
);

export default CardSection;
