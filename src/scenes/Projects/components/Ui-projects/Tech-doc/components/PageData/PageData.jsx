
import React from 'react';

import varName from './pageDataContent.js';

import './pageData.css';

console.log('--------', varName)

const PageData = () => {
  return (
    <div>
      {varName.key}
    </div>
  );
}

export default PageData;



// const keys = Object.entries(content);
  // const techDocContent = keys.map = (x) => {
  //   x = (
  //     <section className="main-section" id={content[x].header}>
  //       <header>
  //         <h2 className="tech-doc__header__h2">content[x].header</h2>
  //       </header>
  //       {content[x].text}
  //     </section>
  //   )
  // };
  // console.log('-------------------', data)