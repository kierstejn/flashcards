import React, { FunctionComponent, Fragment } from 'react';
import { Box, Text } from "grommet";
import Card from '../../models/card/Card'
import MultiLangText from "../shared/MultiLangText";
import UserCard from "../../models/card/UserCard";

interface FlashCardBoxProps {
    showAnswer: boolean
    card?: UserCard
}

const FlashCardBox: FunctionComponent<FlashCardBoxProps> = ({showAnswer, card}) => {
    let primaryText;
    let secondaryText;
    if(card){
        if(!showAnswer){
            primaryText = card.primaryfronttext;
            secondaryText = card.secondaryfronttext;
        } else {
            primaryText = card.primarybacktext;
            secondaryText = card.secondarybacktext;
        }
    }
    return (
        <Box
            border={{ color: 'light-4', size: 'large' }}
            pad={"medium"}
            height={"medium"}
            round={"medium"}
            fill={"horizontal"}
            responsive={false}
            style={{marginBottom: 20}}
            elevation='small'
        >
            {card ?
                (<Fragment>
                    <MultiLangText style={{marginBottom: 20}} size={"large"}>{primaryText}</MultiLangText>
                    <MultiLangText size={"small"}>{secondaryText}</MultiLangText>
                </Fragment>)
                : "Ingen kort i dette deck"
            }

        </Box>
    );
};

export default FlashCardBox;