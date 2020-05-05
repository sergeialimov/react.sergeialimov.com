import React from 'react';

const pageDataContent = {
  introduction: {
    header: 'Introduction',
    id: 'introduction',
    body: (
      <div className="tech-doc__page-data__text">
        <p className="tech-doc__page-data__paragraph">
          JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
        </p>
        <p className="tech-doc__page-data__paragraph">
          JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
        </p>
        <ul className="tech-doc__page-data__list">
          <li className="tech-doc__page-data__list-item">
            Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
          </li>
          <li className="tech-doc__page-data__list-item">
            Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
          </li>
        </ul>
      </div>
    ),
  },
  requirements: {
    header: 'What you should already know',
    id: 'requirements',
    body: (
      <div className="tech-doc__page-data__text">
        <p className="tech-doc__page-data__paragraph">This guide assumes you have the following basic background:</p>
        <ul className="tech-doc__page-data__list">
          <li className="tech-doc__page-data__list-item">A general understanding of the Internet and the World Wide Web (WWW).</li>
          <li className="tech-doc__page-data__list-item">Good working knowledge of HyperText Markup Language (HTML).</li>
          <li className="tech-doc__page-data__list-item">Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</li>
        </ul>
      </div>
    )
  }
}

export default pageDataContent;
