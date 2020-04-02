import React, {CSSProperties, FunctionComponent, ReactChildren} from "react";
import {isPersian} from "../../util/persianHelperMethods";
import {Text} from "grommet";
import {isString} from "lodash";

interface MultiLangTextProps {
    size: "large" | "small",
    style?: CSSProperties
}

const MultiLangText: FunctionComponent<MultiLangTextProps> = ({children, size, style}) => {

    const persian = children && isString(children) ? isPersian(children) : false;
    const textField = persian ?
        <Text size={size === "large" ? "xlarge" : "large"} style={{...style, fontFamily: "sans serif", fontSize: size === "small" ? 30 : 40}}>
            {children}
        </Text>
        :
        <Text style={style} size={size === "large" ? "xlarge" : "large"}>
            {children}
        </Text>;
    return (
        textField
    )
};
export default MultiLangText