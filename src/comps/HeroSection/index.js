import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../../comps/ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src='https://res.cloudinary.com/dtsw09spr/video/upload/v1656961723/mock-profile/video/video_qigadq.mp4'
          type='video/mp4'
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Imagine, Believe and Achieve</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem magni
          sed neque atque culpa.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='skills'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            See Resume{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
