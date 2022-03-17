import React from "react";

import { StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {

  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
  };

  const carDataTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "ao dia",
      price: 340,
    },
    thumbnail:
      "https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-panamera-corretora-de-seguros-700x350.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  );
}
