import React from 'react';

const Contact = (props) => {
  const { content, link } = props;

  return (
    <a
      id="profile-link"
      href={ link }
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contact">
        {content}
      </div>
    </a>
  );
}

export default Contact;