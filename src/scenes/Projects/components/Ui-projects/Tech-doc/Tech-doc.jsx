import React from 'react';

import Navigation from './components/Navigation';
import PageData from './components/PageData';

import './techDoc.css';

const TechDoc = () => {
  return (
    <main className="tech-doc__container">
      <Navigation />
      <PageData />
    </main>
  );
}

export default TechDoc;
