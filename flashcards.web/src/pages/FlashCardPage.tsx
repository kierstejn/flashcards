import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { Box, Button, Text } from "grommet";
import { Trophy, FormNextLink } from 'grommet-icons'

//MODELS
import { CardRead } from '../models/cardModels/CardRead';

//COMPONENTS
import FlashCardBox from '../components/flashCard/FlashCardBox';
import ProgressButton from '../components/flashCard/ProgressButton';

import axios from '../axios';


interface MatchParams {
    deckId: string
}

type AllProps = RouteComponentProps<MatchParams>

const FlashCardPage: FunctionComponent<AllProps> = ({match}) => {

    const [showAnswer, setShowAnswer] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [cardDeck, setCardDeck] = useState<CardRead[]>([]);
    const [loadingDeck, setLoadingDeck] = useState(false);

    const history = useHistory();

    const onCheckAnswer = () => {
        if(!showAnswer){
            setShowAnswer(true)
        }
    };

    const onNextCard = () => {
        setCardIndex(cardIndex+1);
        setShowAnswer(false);
    };

    const onEndQuiz = () => {
        history.goBack()
    };

    useEffect(() => {
        // @ts-ignore
        setCardDeck(dataArray)
    },[]);

     const dataArray = [
        {
            reverse: false,
            front: {
                text: "Hvem er du",
                imageUrl: null
            },
            back: {
                text: "min mor",
                imageUrl: null
            }
         },
         {
             reverse: true,
             front: {
                 text: "Hvem er du",
                 imageUrl: null
             },
             back: {
                 text: "min mor",
                 imageUrl: null
             }
         }
     ];

    return (
        <Fragment>
            {!loadingDeck && cardDeck &&
                <Fragment>
                    <FlashCardBox showAnswer={showAnswer} data={cardDeck[cardIndex]}/>
                    {showAnswer && cardIndex !== dataArray.length - 1 &&
                        <ProgressButton label={"Næste kort"} reverse onClick={onNextCard} icon={<FormNextLink/>}/>
                    }
                    {!showAnswer &&
                        <ProgressButton label={"Check svar"} reverse onClick={onCheckAnswer} icon={<Trophy/>}/>
                    }
                    {showAnswer && cardIndex === dataArray.length-1 &&
                        <ProgressButton label={"Afslut"} reverse onClick={onEndQuiz} icon={<FormNextLink/>}/>
                    }
                </Fragment>
             }
        </Fragment>
    )
};

export default FlashCardPage;