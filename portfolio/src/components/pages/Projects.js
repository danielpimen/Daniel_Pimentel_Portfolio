import React from 'react';
import '../assets/style.css';

const Projects = () => (
  <div>
    <h1 className="header">Projects Page</h1>
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8 text-center">
        <img
          src={require('../assets/portfolioPic1.jpg')}
          className="portfolioPic"
        />
        <h4> Let's Get Physical</h4>
        <p className="portfolioText">
          Let's Get Physical is a fully customizable workout app that allows the
          user to input the amount of time they would like to work out, body
          parts the user would like to work out and the equipment the user has
          available. Workouts will provided that take into account the
          information the user entered.
          <br />
          <a href="https://github.com/danielpimen/Let-s_Get_Physical-">
            {' '}
            Link to GitHub Repo
          </a>
          <br />
          <a href="https://desolate-inlet-39384.herokuapp.com/">
            {' '}
            Link to Application{' '}
          </a>
        </p>
      </div>
      <div className="col-md-2" />
    </div>
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8 text-center">
        <img
          src={require('../assets/portfolioPic2.jpeg')}
          className="portfolioPic"
        />
        <h4>Pick Soccer</h4>
        <p className="portfolioText">
          MERN Application that allows soccer fanatics to connect with fellow
          soccer players. This app allows users to register, create a profile,
          and post comments. The goal of this application is to connect soccer
          players in North Atlanta in order to make it easier to meet up and set
          up pick up soccer games.
          <br />
          <a href="https://github.com/danielpimen/Pick_Soccer">
            {' '}
            Link to GitHub Repo
          </a>
          <br />
          <a href=""> Link to Application </a>
        </p>
      </div>
      <div className="col-md-2" />
    </div>
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8 text-center">
        <img
          src={require('../assets/portfolioPic3.jpeg')}
          className="portfolioPic"
        />
        <h4> EMG_App</h4>
        <p className="portfolioText">
          Application that allows uses to keep track of things to do. Using
          firebase, users add items to a list; when they are finished, they can
          remove the item from the list as well as firebase.
          <br />
          <a href="https://github.com/danielpimen/EMGapp">
            {' '}
            Link to GitHub Repo
          </a>
          <br />
          <a href="https://danielpimen.github.io/EMGapp">
            {' '}
            Link to Application{' '}
          </a>
        </p>
      </div>
      <div className="col-md-2" />
    </div>
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8 text-center">
        <img
          src={require('../assets/portfolioPic4.jpeg')}
          className="portfolioPic"
        />
        <h4> FIFA Ultimate Team Scrapper</h4>
        <p className="portfolioText">
          Application that allows users to scrape FIFA player ratings and
          inforamtion. A front end allows users to navigate through the data
          that has been saved into a MongoDB database. This application allows
          FIFA Ultimate fans to look up player stats in order for them to build
          the ultimate FIFA Ultimate team!
          <br />
          <a href="https://github.com/danielpimen/Scrapper">
            {' '}
            Link to GitHub Repo
          </a>
          <br />
          <a href=""> Link to Application </a>
        </p>
      </div>
      <div className="col-md-2" />
    </div>
  </div>
);

export default Projects;
