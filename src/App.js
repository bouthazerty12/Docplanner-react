import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMain from './NavMain';
import Title from './Title';
import Paragraph from './Paragraph';
import For from './For';
import Link from './Link'
import Table from './Table'
import Improve from './Improve'
import Galerie from './Galerie'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavMain/>
      <Title/>
      <Paragraph/>
      <For/>
      <Link/>
      <Table/>
      <Improve/>
      <Galerie/>
      <Footer/>
    </div>
  );
}

export default App;
