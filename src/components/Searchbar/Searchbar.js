import React from "react";

export default function Searchbar ({onSubmit}) {

       return <header className="searchbar">
          <form className="SearchForm" onSubmit={onSubmit}>
            <button type="submit" className="searchForm-button">
              <span className="searchForm-button-label">Search</span>
            </button>

            <input
              className="searchForm-input"
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
    }

