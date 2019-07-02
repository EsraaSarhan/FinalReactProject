import React, { Component } from "react";
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import Footer from './../../Footer';
import CardContainer from './../../Cards/Cards';
import CardChartContainer from './../../Cards/CardChart';
import CardTableContainer from './../../Cards/CardTable';
import {cards} from './CardsData';




class Content extends Component {

  render() {
    return (
      <Container fluid className={classNames('content', {'is-open': this.props.isOpen})}>
        <NavBar toggle={this.props.toggle}/>
        <div className="container-fluid main-panel">
          <section className="row">
          <CardContainer cards={cards} />
          </section>

          <section className="row">
          <CardChartContainer />
          </section>

          <section className="row">
          <CardTableContainer />
          </section>
        </div>
        <Footer></Footer>
      </Container>
    );
  }
}

export default Content;
