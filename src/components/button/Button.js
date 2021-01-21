import React from 'react'
import s from './Button.module.css'
import PropTypes from "prop-types";

const Button = ({ loadMore }) => {
    return (
        <button className={s.Button} type="button" onClick={loadMore}>Load more</button>
    );
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};
export default Button;