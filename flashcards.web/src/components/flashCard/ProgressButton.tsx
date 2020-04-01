import React, {FunctionComponent, ReactElement} from 'react';
import {Button} from "grommet";

interface ProgressButtonProps {
    label: string
    reverse?: boolean
    onClick: () => void
    icon?: ReactElement
}

const ProgressButton: FunctionComponent<ProgressButtonProps> = ({label, reverse, onClick, icon}) => {
    return (
        <Button
            icon={icon}
            label={label}
            reverse
            primary
            size={"large"}
            fill={false}
            onClick={onClick}
        />
    )
};

export default ProgressButton;