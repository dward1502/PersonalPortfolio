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
import Modal from '../../Components/UI/Modal/Modal';
import cardData from '../../card-data.json';

import './App.css';


class App extends Component {

  //SUPER PROPS
  constructor(props) {
    super(props);
    this.state = {
      cardData: cardData
    };
  }

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
                gitbutton={data.gitbutton}
                herbutton={data.herbutton}
                githubLink={data.gitLink}
                herokuLink={data.heroLink}
              />
            ))}
          </CardBox>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default App;
