import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { constants } from "ethers";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Goals</PricingHeading>
          <PricingContainer>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Rare NFTs</PricingCardPlan>
                <PricingCardCost>10000 NFTs</PricingCardCost>
                <PricingCardLength>probably rare NFTs</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Goblin Heist Genrated</PricingCardFeature>
                  <PricingCardFeature>One of a Kind</PricingCardFeature>
                </PricingCardFeatures>
                <a href="https://opensea.io/collection/goblin-heist">
                  <Button primary>Opean Sea</Button>
                </a>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Fair Launch</PricingCardPlan>
                <PricingCardCost>2.5 MATIC</PricingCardCost>
                <PricingCardLength>per NFT</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>For Public sale</PricingCardFeature>
                  <PricingCardFeature>Verified Contract</PricingCardFeature>
                </PricingCardFeatures>
                <a href="https://opensea.io/collection/goblin-heist">
                  <Button primary>Opean Sea</Button>
                </a>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Exclusive Utility</PricingCardPlan>
                <PricingCardCost>1 {constants.EtherSymbol}</PricingCardCost>
                <PricingCardLength>to random Goblin Heist Owner</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Limited Edition merch</PricingCardFeature>
                  <PricingCardFeature>
                    Early access to random holders
                  </PricingCardFeature>
                </PricingCardFeatures>
                <a href="https://opensea.io/collection/goblin-heist">
                  <Button primary>Opean Sea</Button>
                </a>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
