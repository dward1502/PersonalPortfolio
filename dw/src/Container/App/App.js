import React, { Component } from 'react';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Navbar from '../../Components/Navbar/Navbar';
import Dotnav from '../../Components/DotNav/DotNav';
import Billboard from '../../Components/Billboard/Billboard';
import Items from '../../Components/Items/Items';
import About from '../../Components/About/About';
import CardBox from '../../Components/CardBox/CardBox';
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import cardData from '../../card-data.json';

import './App.css';


class App extends Component {

  //SUPER PROPS
  constructor(props) {
    super(props);
    this.state = {
      cardData: cardData,
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Navbar />
          <Dotnav />
          <Billboard />
          <About />
          <Items />
          <CardBox>
            {/* THIS MAPS AND PASSES THE DATA FROM YOUR CARD-DATA JSON TO YOUR CARDS */}
            {this.state.cardData.map(data => (
              <Card
                key={data.id}
                id={data.id}
                img={data.img}
                alt={data.alt}
                title={data.title}
                desc={data.desc}
                button={data.button}
                onClick={this.handleOpenModal}
              />
            ))}
          </CardBox>
          <Footer />
          {/* MODAL PROPS ARE PASSED TO THE DETAIL LIGHTBOX */}

          
          {/* <DetailModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
            data={this.state.cardData}
          /> */}
        </Wrapper>
      </div>
    );
  }
}

export default App;
