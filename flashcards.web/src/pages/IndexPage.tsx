import React, {FunctionComponent, Fragment, useEffect, useState} from 'react';
import {Button, Box, Grid, ResponsiveContext} from 'grommet';
import {useHistory} from 'react-router-dom';

import axios from '../axios';

//MODELS
import DeckPres from '../models/deckModels/DeckPres';

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
                console.log(deckList);
                console.log(response);
                const timer = setTimeout(() => {
                    setDeckList(deckList);
                    setLoadingDeckList(false);
                }, 2000);
                return () => clearTimeout(timer);
            })
    }, []);

    // @ts-ignore
    return (
        <GridLayout>
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
        </GridLayout>
    );
};

export default IndexPage;