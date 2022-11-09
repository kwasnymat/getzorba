import React, { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { CiDollar } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

import { RootState } from "../../../shared/store/store";
import { Header3, Link, Text } from "../../../shared/components/Typography";
import {
  CardContainer,
  CardsContainer,
  CarouselContainer,
  CloseButton,
  Image,
  Price,
  PriceContainer,
  PromoContainer,
  PromoInfoContainer,
  PromoTitleContainer,
  StyledSup,
  UnitsContainer,
} from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Cards = () => {
  const { properties } = useSelector((state: RootState) => state.properties);
  const [isPromoMenuOpened, setIsPromoMenuOpened] = useState(true);
  const handlePromoMenu = useCallback(() => {
    setIsPromoMenuOpened(false);
  }, []);

  return (
    <CardsContainer>
      {properties.length ? (
        properties.map(
          ({ _id, purchasePrice, units, address, images }, index) => {
            const { bathroom, bedroom, squareFootage } = units[0];
            const { formattedAddress, locality, stateCode } = address;
            return (
              <Fragment key={_id}>
                {index === 2 && isPromoMenuOpened && (
                  <PromoContainer>
                    <CiDollar color="#1c85e8" size="30" />
                    <PromoInfoContainer>
                      <PromoTitleContainer>
                        <Header3>
                          Make your strongest offer when you buy with Opendoor
                        </Header3>
                      </PromoTitleContainer>
                      <Link
                        color="secondary"
                        weight="semiBold"
                        href="/"
                      >{`Learn more >`}</Link>
                    </PromoInfoContainer>
                    <CloseButton onClick={handlePromoMenu}>
                      <FaTimes size="15" />
                    </CloseButton>
                  </PromoContainer>
                )}
                <CardContainer>
                  <CarouselContainer>
                    <Carousel showThumbs={false}>
                      {images.slice(0, 10).map((url) => (
                        <Image key={url} src={url} />
                      ))}
                    </Carousel>
                  </CarouselContainer>
                  <PriceContainer>
                    <Price>${purchasePrice.toLocaleString()}</Price>
                    <UnitsContainer>
                      <Text color="tertiary">{bedroom}bd</Text>
                      <Text color="tertiary">{bathroom}ba</Text>
                      <Text color="tertiary">
                        ${squareFootage}ft<StyledSup>2</StyledSup>
                      </Text>
                    </UnitsContainer>
                    <Text color="tertiary">{formattedAddress}</Text>
                    <Text color="tertiary">
                      {locality}
                      {", "}
                      {stateCode}
                    </Text>
                  </PriceContainer>
                </CardContainer>
              </Fragment>
            );
          }
        )
      ) : (
        <Text>There is no property for given address.</Text>
      )}
    </CardsContainer>
  );
};
