import React from 'react';

import Navigation from './components/Navigation';
import PageData from './components/PageData';

import './techDoc.css';

const TechDoc = () => {
  return (
    <main className="tech-doc__main">
      <Navigation />
      <PageData />
    </main>
  );
}

export default TechDoc;
