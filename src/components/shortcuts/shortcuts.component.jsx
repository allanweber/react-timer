import React from "react";

import "./shortcuts.styles.scss";

const ShortCuts = () => (
  <div className="container">
  <h2>Short Cuts</h2>
    <div className="short-cuts">
      <div>
        <span className="key">&#8592; -min</span>
      </div>
      <div className="direction">
        <div className="up">
          <span className="key">&#8593; +sec</span>
        </div>
        <div className="down">
          <span className="key">&#8595; -sec</span>
        </div>
      </div>
      <div>
        <span className="key">&#8594; +min</span>
      </div>
    </div>
    <div className="short-cuts controllers">
      <div>
        <span className="key">&#8629; start/pause</span>
      </div>
      <div>
        <span className="key">space start/pause</span>
      </div>
    </div>
  </div>
);

export default ShortCuts;
