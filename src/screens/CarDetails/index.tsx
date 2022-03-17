import React from "react";

import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImages } from "./styles";

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
    </Container>
  );
}
