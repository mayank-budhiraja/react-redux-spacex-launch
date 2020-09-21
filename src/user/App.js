import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import Errors from './components/Errors';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ route }) => {
  return (
    <div style={greyBg}>
      <Header />
      <div className="row">
        <Errors>{renderRoutes(route.routes)}</Errors>
      </div>
      <Footer />
    </div>
  );
};

const greyBg = {
  "background-color" : "#80808014"
}

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
