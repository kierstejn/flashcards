import React, {FunctionComponent} from 'react';
import './Spinner.css'

interface props {
    color?: string
}



const Spinner: FunctionComponent<props> = ({color}) => {

    const style = color ? {
       borderLeft: `1.1em solid ${color}`
    }: {};

    return (
         <div style={style} className="loader">Loading...</div>
    )
};

export default Spinner;