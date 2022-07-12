import React from 'react';
import SneakpeaksBanner from '../component/ArticleBanners/Sneakpeak/sneakpeaksBanner';
import Menu from '../component/Header/menu';
import FooterBar from '../component/Footer/footerbar';
import Box from '@mui/material/Box';
import { Flex } from 'rebass/styled-components';


const Articles = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <SneakpeaksBanner />
        </Flex>
    )
}

export default Articles;
