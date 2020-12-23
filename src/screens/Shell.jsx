import React, {Component} from 'react'
import {Flex, Box} from 'reflexbox'
import Header from '../components/Header';

export default class Shell extends Component {
    render() {
        const { highscore, style, children } = this.props;
        return (
            <Flex
             align="center"
             justify="center"
             style={{width: "100%", height: "100%", ...style}}
            >
                <Header p={2} justify="space-between" flex>
                    <Box>
                        HIGH SCORE:  <br />
                    </Box>
                </Header>
                <Box
                 display="flex"
                 justifyContent="center"
                 alignItems="center"
                 flexDirection="column"
                 width="100%"
                 height="100%"
                >
                    {children}
                </Box>
            </Flex>
        )
    }
}