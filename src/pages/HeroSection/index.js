import React, { useState } from "react";
import Video from "../../Videos/111.mp4";
import {Button} from '../../components/Button.js'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/
            mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Discover, collect, and sell extraordinary NFTs</HeroH1>
        <HeroP>
        OpenSea is the world's first and largest NFT marketplace
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
export default HeroSection;
