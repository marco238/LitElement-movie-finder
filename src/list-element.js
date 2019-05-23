import {LitElement, html} from 'lit-element';
import { connect } from 'pwa-helpers';

import { deleteFilm } from '../src/redux/actions.js';
import { store } from '../src/redux/store.js';

class ListElement extends connect(store)(LitElement) {
  render() {
    return html`
      <div>
        <style>
          li {
            margin: 20px;
          }
          .delete-btn {
            padding: 2px 10px;
            height: 6px;
            background-color: red;
            border-radius: 2px;
            color: #fff;
            cursor: pointer;
          }
        </style>

        ${this.films === undefined ? html`<p>Nothing found !!!</p>` : ''}
        <ul>
          ${this.films !== undefined ?
              this.films.map((item, i) => html`<li>${item.Title} <span class="delete-btn" @click="${() => {store.dispatch(deleteFilm(this.films, i));}}">-</span></li>`)
              :
              ''}
        </ul>
      </div>
    `;
  }
  
  static get properties() {
    return {
      films: {type: Array}
    }
  }
}

customElements.define('list-element', ListElement);