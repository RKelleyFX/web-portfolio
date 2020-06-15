import React, { Component } from 'react';

import NaviBar from '../components/Navbar';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { NAVI_LOCATION } from '../actions/actions';

class Fabrication extends Component {
  constructor (props) {
    super(props)
    //this.state = { value: false }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    this.setNaviState();
  }

  setNaviState () {
    //useDispatch({ type: NAVI_LOCATION, payload: 'fabrication' })
  };

  render() {
    //const name = useSelector(state => state.navPage);

    return (
      <div>
        <NaviBar />
        <h2>Fabrication</h2>
        {/*<h5>{name}</h5>*/}
      </div>
    )
  }
};

export default Fabrication;