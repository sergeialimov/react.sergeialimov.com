import React from 'react';


const getPageDataContent = (classNames) => {
  return {
    introduction: {
      header: 'Introduction',
      id: 'introduction',
      body: (
        <div className={classNames.text}>
          <p className={classNames.p}>
            JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
          </p>
          <p className={classNames.p}>
            JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
          </p>
          <ul className={classNames.ul}>
            <li className={classNames.li}>
              Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
            </li>
            <li className={classNames.li}>
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
        <div className={classNames.text}>
          <p className={classNames.p}>This guide assumes you have the following basic background:</p>
          <ul className={classNames.ul}>
            <li className={classNames.li}>A general understanding of the Internet and the World Wide Web (WWW).</li>
            <li className={classNames.li}>Good working knowledge of HyperText Markup Language (HTML).</li>
            <li className={classNames.li}>Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</li>
          </ul>
        </div>
      )
    },
    jsAndJava: {
      header: 'JavaScript and Java',
      id: 'jsAndJava',
      body: (
        <div className={classNames.text}>
          <p className={classNames.p}>JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.</p>
          <p className={classNames.p}>In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.</p>
          <p className={classNames.p}>JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.</p>
        </div>
      )
    }
  }
}

export default getPageDataContent;
