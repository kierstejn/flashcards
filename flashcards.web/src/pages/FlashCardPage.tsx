import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import {Box, Button, Stack, Text} from "grommet";
import { Trophy, FormNextLink } from 'grommet-icons'
import axios from '../axios';

//COMPONENTS
import FlashCardBox from '../components/flashCard/FlashCardBox';
import ProgressButton from '../components/flashCard/ProgressButton';
import Spinner from '../components/shared/loadingSpinnerLarge/Spinner';

//MODELS
import Deck from "../models/deck/Deck";

//LAYOUT
import GridLayout from "../layout/layoutPages/GridLayout";

interface MatchParams {
    deckId: string
}

type AllProps = RouteComponentProps<MatchParams>

const FlashCardPage: FunctionComponent<AllProps> = ({match}) => {

    const [showAnswer, setShowAnswer] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [deck, setDeck] = useState<Deck | undefined>( undefined);
    const [loadingDeck, setLoadingDeck] = useState(false);

    const history = useHistory();
    const { deckId } = match.params;

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
        setLoadingDeck(true);
        // @ts-ignore
        if(deckId) {
            axios.get(`deck/${deckId}`)
                .then((response) => {
                    const deck: Deck = response.data;
                    setDeck(deck);
                    setLoadingDeck(false);
                })
                .catch(err => {
                    setLoadingDeck(false)
                })
        }},[deckId]);

    return (
        <GridLayout boxSize={"medium"}>
            {!loadingDeck && deck &&
                <Fragment>
                    {deck.cardlist ?
                        <Box direction={"column"}>
                            <FlashCardBox showAnswer={showAnswer} card={deck?.cardlist[cardIndex]}/>
                            {!showAnswer && deck.cardlist ?
                                <ProgressButton label={"Check svar"} reverse onClick={onCheckAnswer}/>
                                : (cardIndex === deck.cardlist.length-1 ?
                                <ProgressButton label={"Afslut"} reverse onClick={onEndQuiz} icon={<Trophy/>}/>
                                :
                                <ProgressButton label={"Næste kort"} reverse onClick={onNextCard} icon={<FormNextLink/>}/>
                                )
                            }
                        </Box>
                        :
                        <FlashCardBox showAnswer={showAnswer}/>
                    }

                </Fragment>
             }
            {loadingDeck &&
                <Spinner color={"#B3D0BF"}/>
            }
        </GridLayout>
    )
};

export default FlashCardPage;