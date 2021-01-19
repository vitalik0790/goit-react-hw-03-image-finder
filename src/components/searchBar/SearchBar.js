import React from 'react'
import s from './SearchBar.module.css';

const SearchBar = ({ search, onHandleSearch, getPhoto }) => {
    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={getPhoto}>
                <button type="submit" className={s.SearchFormButton} >
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={s.SearchFormInput}
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    value={search}
                    onChange={onHandleSearch}
                />
            </form>
        </header>
    );
}

export default SearchBar;