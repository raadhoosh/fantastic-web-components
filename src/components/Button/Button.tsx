import * as React from 'react';

interface IProps {
    /** defining the Button's label */
    label: string,
}

const Button = (props: IProps) => {

    return (
        <button> {props.label} </button>
    )
}

export default Button;