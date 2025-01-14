import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Faqs } from "../components";
import SubForm from "../components/subscription-form";
import * as ROUTES from "../constants/routes";

export function FaqsContainer() {
  return (
    <Faqs>
      <Faqs.Title>Frequently Asked Question</Faqs.Title>
      {faqsData.map((item) => (
        <Faqs.Item key={item.id}>
          <Faqs.Header>{item.header}</Faqs.Header>
          <Faqs.Body>{item.body}</Faqs.Body>
        </Faqs.Item>
      ))}
      <Faqs.Item />
      <SubForm>
        <SubForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </SubForm.Text>
        <SubForm.Break />
        <SubForm.Input placeholder="Email Address" />
        <SubForm.Button to={ROUTES.SIGN_UP}>Try it Now</SubForm.Button>
      </SubForm>
    </Faqs>
  );
}
