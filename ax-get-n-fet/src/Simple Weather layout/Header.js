import React from "react";
import "../Simple Weather layout/Header";

export default function Header() {
  return (
    <div>
      <header>
        <div className="search-engine">
          <form action="" id="search-engine">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city here"
                aria-label="City"
                aria-describedby="button-addon2"
                id="city-search"
                autoComplete="off"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
