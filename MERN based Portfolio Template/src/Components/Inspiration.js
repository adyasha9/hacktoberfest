import React, { Component } from "react";

class Inspiration extends Component {
  render() {
    if (this.props.data) {
      var inspiration = this.props.data.inspiration.map(function (inspiration) {
        return (
          <li key={inspiration.user}>
            <blockquote>
              <p>{inspiration.text}</p>
              <cite>{inspiration.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="inspiration">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Inspiration</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{inspiration}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Inspiration;
