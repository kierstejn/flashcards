import React from 'react'
import {Box, Heading, Anchor, ThemeContext} from 'grommet'
import {useHistory, Link} from 'react-router-dom';


const Header = (props: any) => {

    const history = useHistory();

    const onClick = () => {
        history.replace("/")
    };

    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            height={"xsmall"}
            justify='between'
            background='secondary'
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation='medium'
            style={{ zIndex: '1' }}
            {...props}
        >
            <Heading level='2' margin='none'>
                <ThemeContext.Extend
                    value={{ anchor: { color: {"dark": "light-1", "light": "dark-2"}, hover: {textDecoration: "none"} } }}
                >
                    <Anchor onClick={onClick}>
                        Persian flashcardssss
                    </Anchor>
                </ThemeContext.Extend>
            </Heading>
        </Box>
    )
};

export default Header
