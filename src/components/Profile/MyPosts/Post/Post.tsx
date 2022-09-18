import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message :string
}

export function Post(props:PostPropsType) {
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}