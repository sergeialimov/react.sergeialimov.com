import React, { Component } from 'react';
import './../styles/social.css';

class Social extends Component {
  render() {
    return (
      <section id="social">
        <header>
          <h3>Let's work together</h3>
          <p class="coffee">How do you take your coffee?</p>
        </header>
        <div class="contacts">
          <a 
            id="profile-link" 
            href="https://github.com/sergeialimov" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact">
                Github
            </div>
          </a>
          <a 
            id="profile-link" 
            href="https://www.linkedin.com/in/sergei-alimov/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div class="contact">
              LinkedIn
            </div>
          </a>
          <a 
            id="profile-link" 
            href="https://www.facebook.com/alimov.s" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div class="contact">
              Facebook
            </div>
          </a>
          <a 
            id="profile-link" 
            href="mailto:8912652@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div class="contact">
              Email
            </div>
          </a>
          <a id="profile-link" href="tel:+79313392819" target="_blank" rel="noopener noreferrer">
            <div class="contact">
              Call me
            </div>
          </a>
        </div>
      </section>
    )
  }
}

export default Social;