import React from "react";

import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./Hero.elements";
import "./style.css";

function Hero() {
  return (
    <>
      <div className="hero-bg">
        <InfoSec lightBg="true">
          <Container>
            <InfoRow imgStart="">
              <InfoColumn>
                <TextWrapper>
                  <TopLine lightTopLine="true">Welcome To</TopLine>
                  <Heading lightText="true">Goblin Heist</Heading>
                  <Subtitle lightTextDesc="true">
                    It's 1920, our treasure was heisted by pirate's but now our
                      Goblin's are ready to heist them back for our community .
                  </Subtitle>
                  <a href="https://mint.goblinheist.xyz">
                    <Button big fontBig primary="true">
                      Mint Your Goblin Heist
                    </Button>
                  </a>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                {/* <ImgWrapper start="">
                <Img style={{ width: "" }} src={bg} alt={alt} />
              </ImgWrapper> */}
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </div>
    </>
  );
}

export default Hero;
