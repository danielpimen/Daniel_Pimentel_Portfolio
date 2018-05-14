import React from 'react';
import {Link, Route} from 'react-router-dom';
import Learn from './Learn';
import '../assets/style.css';

const Contact = props => (
  <div>
    <div>
      <h1 className="header">Contact Page</h1>
      <div className="col-md-5" />
      <div className="col-md-2">
        <br />
        <img src={require('../assets/github.png')} className="logo" />
        <br />
        <br />
        <img src={require('../assets/linkedin.png')} className="logo" />
        <br />
      </div>
      <div className="col-md-5" />
      <p className="bodyText">
        If you are interested in learning more about me or have any questions,
        please contact me at <a>danielpimen92@gmail.com</a>
      </p>
    </div>
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
);

export default Contact;
