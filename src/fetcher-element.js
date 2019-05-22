import { LitElement, html } from 'lit-element';
import './list-element.js';
import { connect } from 'pwa-helpers';

import { store } from '../src/redux/store.js';

class FetcherElement extends connect(store)(LitElement) {
  render() {
    return html`
      <div>
        <input type="text" placeholder='Type here...' .value=${this.topic} @input=${this.handleInput}>
        <button @click="${this.doSearch}">Search</button>

        <list-element .films=${this.films}></list-element>
      </div>
      `;
  }

  stateChanged(state) {
    this.topic = state.todos;
    this.films = state.filter;
  }
  
  static get properties() {
    return {
      topic: {type: String},
      films: {type: Array}
    }
  }

  handleInput(e) {
    this.topic = e.target.value;
  }

  doSearch() {
    if(this.topic !== '') {
      fetch(`https://www.omdbapi.com/?s=${this.topic}&plot=full&apikey=e477ed6a`)
        .then(response => response.json())
        .then(myJson => {
          this.films = myJson.Search;
        })
        .catch(error =>  console.log('Error: ', error));
    }
  }

}

customElements.define('fetcher-element', FetcherElement);