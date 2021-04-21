import React, { Component } from 'react';

import '../styles/page.sass';
import '../styles/header.sass';

export class Header extends Component {
  render() {
    return (
      <div className="front-header">
        <div className="main">
          <h1>Hello.</h1>
          <p>I'm <a className="me" href="//sems.dev">Sem</a>.</p> 
          <p>I like to take photos of all different kinds of things. Most of the time related to travel, architecture, nature and sometimes cars. </p> 
          <p>Currently, you can find my photos on <a className="me" href="//unsplash.com/@semspam">Unsplash</a>, <a className="me" href="//instgram.com/bysem.me">Instagram</a>.</p>
          <p>If you want to contact me, you can! Send an email to <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.</p>
        </div>
      </div>
    )
  }
}