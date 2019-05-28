import { LitElement, html } from 'lit-element';

// import '@vaadin/vaadin-charts';
import { store } from '../src/redux/store.js';
import { connect } from 'pwa-helpers';

class StatsElement extends connect(store)(LitElement) {
  render() {
    return html`
      <div>
        <style>
          stats-element {
            display: block;
          }
        </style>

        <h2>Stats</h2>

        <!-- ${this.getChart()} -->
      </div>
    `;
  }
  
  static get properties() {
    return {
      type: { type: String },
      chartConfig: { type: Array },
      hasFilms: { type: Boolean }
    }
  }
  
  stateChanged(state) {
    if(state.films.length > 0) {
      this.chartConfig = [ 
        { name: `Deleted ( ${(10 - state.films.length)} )`, y: 10 - state.films.length },
        { name: `Stored ( ${state.films.length} )`, y: state.films.length }
      ];
    }

    this.hasFilms = state.films.length > 0;
  }
  
  // getChart() {
  //   if(this.hasFilms) {
  //     return html`
  //         <vaadin-chart type="${this.type}">
  //           <vaadin-chart-series
  //             .values="${this.chartConfig}"
  //           ></vaadin-chart-series>
  //         </vaadin-chart>
  //       `
  //   } else {
  //     return html`
  //       <p>Nothing to do! 🌴🍻☀️</p>
  //     `;
  //   }
  // }

  constructor() {
    super();
    this.type = 'pie';
  }
}

customElements.define('stats-element', StatsElement);