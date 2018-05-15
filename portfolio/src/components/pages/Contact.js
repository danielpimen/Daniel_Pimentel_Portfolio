import React from 'react';
import {Link, Route} from 'react-router-dom';
import Learn from './Learn';
import '../assets/style.css';

const Contact = props => (
  <div>
    <h1 className="header">Contact Page</h1>
    <div className="row">
      <div className="col-md-4" />
      <div className="col-md-4">
        <div className="row">
          <h3 className="check"> Check Me Out</h3>
        </div>
        <div className="row">
          <div>
            <a href="https://github.com/danielpimen">
              <img src={require('../assets/github.png')} className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-pimentel1992/">
              <img src={require('../assets/linkedin.png')} className="logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4" />
    </div>
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8">Sup</div>
      <div className="col-md-2" />
    </div>
    <div className="row">
      <div className="col-md-12">
        <Link to={`${props.match.url}/learn`} className="btn btn-default">
          View My Resume
        </Link>{' '}
        <Link to="/contact" className="btn btn-default">
          Close Resume
        </Link>
        <Route exact path={`${props.match.url}/learn`} component={Learn} />
      </div>
    </div>
  </div>
);

export default Contact;
