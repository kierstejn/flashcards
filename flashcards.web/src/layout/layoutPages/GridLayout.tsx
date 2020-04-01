import React, {FunctionComponent} from 'react';
import {Box, Grid, ResponsiveContext} from 'grommet';

const GridLayout: FunctionComponent = ({children}) => {
    return (
        <ResponsiveContext.Consumer>
            {responsive =>
                responsive === "small" || responsive === "xsmall" ? (
                    <Grid
                        alignSelf={"start"}
                        align={"start"}
                        fill={"horizontal"}
                        columns={['auto']}
                        rows={['auto']}
                        pad={"large"}
                        gap={"medium"}
                        areas={[
                            { name: 'main', start: [0, 0], end: [0, 0]},
                        ]}
                        responsive
                    >
                        <Box gridArea={"main"} background={"light-3"} pad={"large"} justify={'center'}>
                            {children}
                        </Box>
                    </Grid>
                ) : (
                    <Grid
                        fill={"horizontal"}

                        columns={["small", 'auto', "small"]}
                        rows={["xxsmall", 'auto']}
                        gap="medium"
                        areas={[
                            { name: 'main', start: [1, 1], end: [1, 1] },
                        ]}
                        responsive
                    >
                        <Box gridArea={"main"} background={"light-3"} pad={"large"} flex={"shrink"} justify={'center'}>
                            {children}
                        </Box>
                    </Grid>
                )
            }
        </ResponsiveContext.Consumer>

    );
};

export default GridLayout;