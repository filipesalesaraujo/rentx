import React from "react";

import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
          at risus sed accumsan. Aliquam scelerisque risus in nisi aliquet
          ultrices. Nulla dignissim rhoncus porttitor. Nulla in pharetra enim.
          Nulla a volutpat massa.
        </About>
      </Content>
    </Container>
  );
}
