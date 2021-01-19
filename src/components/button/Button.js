import React from 'react'
import s from './Button.module.css'

const Button = ({ loadMore }) => {
    return (
        <button className={s.Button} type="button" onClick={loadMore}>Load more</button>
    );
}

export default Button;