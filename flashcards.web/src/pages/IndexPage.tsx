import React, {FunctionComponent, Fragment, useEffect, useState} from 'react';
import {Button, Box, Grid, ResponsiveContext} from 'grommet';
import {useHistory} from 'react-router-dom';

import axios from '../axios';

//MODELS
import DeckPres from '../models/deck/DeckPres';

import GridLayout from "../layout/layoutPages/GridLayout";
import Spinner from '../components/shared/loadingSpinnerLarge/Spinner';

const IndexPage: FunctionComponent = () => {

    const [deckList, setDeckList] = useState<DeckPres[]>([]);
    const [loadingDeckList, setLoadingDeckList] = useState(false);

    const history = useHistory();

    const onButtonClick = (id: string) => {
        history.push("deck/" + id)
    };

    useEffect( () => {
        setLoadingDeckList(true);
        axios.get("deck")
            .then((response) => {
                const deckList = response.data;
                setDeckList(deckList);
                setLoadingDeckList(false);
            })
            .catch((err) => {
                setLoadingDeckList(false);
            })
    }, []);

    // @ts-ignore
    return (
        <GridLayout boxSize={"large"}>
            <Box elevation='medium' gridArea={"main"} background={"light-3"} pad={"large"} justify={'center'}>
                <ResponsiveContext.Consumer>
                    {responsive =>
                        !loadingDeckList ?
                            <Fragment>
                                {deckList.map((deck, index) => {
                                    return (
                                        <Button
                                            onClick={() => onButtonClick(deck.id)}
                                            label={deck.name}
                                            primary
                                            color={"primary"}
                                            size={"large"}
                                            margin={responsive === "small" ? "small" : "medium"}
                                        />
                                    )
                                })}
                            </Fragment>
                            :
                            <Spinner color={"#B3D0BF"}/>
                    }
                </ResponsiveContext.Consumer>
            </Box>
        </GridLayout>
    );
};

export default IndexPage;