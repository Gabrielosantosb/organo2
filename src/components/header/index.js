import React from 'react';
import { BannerContainer, BannerImage, } from './styles';
import Banner from "../../imgs/banner.png"

export const Header = () => {
  return (
    <BannerContainer>
      <BannerImage src={Banner} alt='Banner'/>
    </BannerContainer>
  );
};
