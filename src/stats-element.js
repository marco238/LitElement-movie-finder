import {LitElement, html} from 'lit-element';

class StatsElement extends LitElement {
  render() {
    return html`
      <div>
        <h2>Stats</h2>
      </div>
    `;
  }
  
  static get properties() {
    return {
      
    }
  }
}

customElements.define('stats-element', StatsElement);