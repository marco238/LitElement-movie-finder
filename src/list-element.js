import {LitElement, html} from 'lit-element';

class ListElement extends LitElement {
  render() {
    console.log(this.films)
    return html`
      <div>
        ${this.films === undefined ? html`<p>Nothing found !!!</p>` : ''}
        <ul>
          ${this.films !== undefined ?
              this.films.map(item => html`<li>${item.Title}</li>`)
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

  constructor() {
    super();
  }
}

customElements.define('list-element', ListElement);