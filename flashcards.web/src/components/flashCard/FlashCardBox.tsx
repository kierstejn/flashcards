import React, { FunctionComponent } from 'react';
import { Box, Text } from "grommet";
import { Card } from '../../models/cardModels/Card'

interface FlashCardBoxProps {
    showAnswer: boolean
    card?: Card
}

const FlashCardBox: FunctionComponent<FlashCardBoxProps> = ({showAnswer, card}) => {
    return (
        <div>
            <Box
                border={{ color: 'light-4', size: 'large' }}
                pad="medium"
                margin={"medium"}
                basis={"medium"}
                height={"medium"}
                round={"medium"}
                width={"medium"}
                responsive={false}
            >
                {card ?

                    <Text size={"xlarge"}>{showAnswer ? card.backtext : card.fronttext}</Text>
                    : "Ingen kort i dette deck"
                }
            </Box>
        </div>
    );
};

export default FlashCardBox;