import React, {FunctionComponent} from 'react';
import {Box, Grid, ResponsiveContext} from 'grommet';

interface GridLayoutProps {
    boxSize: "medium" | "large"
}

const GridLayout: FunctionComponent<GridLayoutProps> = ({children, boxSize})  => {

    const responsiveSizes = ["small", "xsmall"];

    return (

        <ResponsiveContext.Consumer>
            {responsive =>
                responsiveSizes.includes(responsive) ? (
                    <Grid
                        alignSelf={"start"}
                        align={"start"}
                        fill={"horizontal"}
                        columns={['auto']}
                        rows={['auto']}
                        pad={"large"}
                        areas={[
                            { name: 'main', start: [0, 0], end: [0, 0]},
                        ]}
                        responsive
                    >
                        <Box gridArea={"main"}>
                            {children}
                        </Box>
                    </Grid>
                ) : (
                    <Grid
                        fill={"horizontal"}

                        columns={["auto", boxSize, "auto"]}
                        rows={["xxsmall", 'auto']}
                        areas={[
                            { name: 'main', start: [1, 1], end: [1, 1] },
                        ]}
                        responsive
                    >
                        <Box gridArea={"main"}>
                            {children}
                        </Box>
                    </Grid>
                )
            }
        </ResponsiveContext.Consumer>

    );
};

export default GridLayout;