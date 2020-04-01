import React, { FunctionComponent } from 'react';
import { Box, Text } from "grommet";
import { CardRead } from '../../models/cardModels/CardRead'

interface FlashCardBoxProps {
    showAnswer: boolean
    data: CardRead
}

const FlashCardBox: FunctionComponent<FlashCardBoxProps> = ({showAnswer, data}) => {
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
                {data ?
                <Text>{showAnswer ? data.back.text : data.front.text}</Text>
                    : null
                }
            </Box>
        </div>
    );
};

export default FlashCardBox;