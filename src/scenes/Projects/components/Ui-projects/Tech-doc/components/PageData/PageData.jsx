import React from 'react';

import pageDataContent from './pageDataContent.js';

import './pageData.css';

const keys = Object.keys(pageDataContent);

const content = keys.map(
  key => (
    <section className="main-section" id={pageDataContent[key].id}>
      <header>
        <h2 className="tech-doc__page-data__header_h2">{pageDataContent[key].header}</h2>
      </header>
      {pageDataContent[key].body}
    </section>
  )
);

const PageData = () => {
  return (
    <div>
      {content}
    </div>
  );
}

export default PageData;
