import React, { Component } from 'react';

import '../styles/style.css';

import { API, Storage } from 'aws-amplify';
import * as queries from '../graphql/queries';

class PageIntro extends Component {
  constructor (props) {
    super(props)
    this.state = { introArray: " ", pageIntro: " " }
    //this.newTicketQuery = this.newTicketQuery.bind(this)
  }

  componentDidMount() {
    this.fetchIntro();  
  }
  
  async fetchIntro() {
    try {
      const apiData = await API.graphql({ query: queries.listPageIntros, variables: { filter: {page: {eq: this.props.pageId }} } });
      const introsFromAPI = apiData.data.listPageIntros.items;
      await Promise.all(introsFromAPI.map(async p => {
        if (p.icon) {
            const icon = await Storage.get(p.icon);
            p.icon = icon;
        }
        return p;
      }))
      this.setState({ introArray: apiData.data.listPageIntros.items });
      const singleIntro = this.state.introArray.find( intro => intro.body !== null );
      this.setState({ pageIntro: singleIntro });
    } catch (err) {
      console.log('Error fetching page intro');
      console.log(err);
    }
  }

  render() {

    const intro = this.state.pageIntro.body
    const icon = this.state.pageIntro.icon

    return (
      <div className='container'>
        <img id='pageIcon' alt="Page Icon" src={icon}></img>
        <p id='pageText'> {intro} </p>
      </div>
    )
  }
};

export default PageIntro;