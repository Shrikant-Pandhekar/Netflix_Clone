import React from "react";
import { SubForm, Feature } from "../components";
import { FaqsContainer } from "../container/faq";
import { FooterContainer } from "../container/footer";
import { HeaderContainer } from "../container/header";
import { JumbotronContainer } from "../container/jumbotron";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <SubForm>
            <SubForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </SubForm.Text>
            <SubForm.Break />
            <SubForm.Input placeholder="Email Address" />
            <SubForm.Button to={ROUTES.SIGN_UP}>Try it Now</SubForm.Button>
          </SubForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
