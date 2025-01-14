import React from "react";

import {
  Container,
  Input,
  Button,
  Text,
  Break,
} from "./style/subscription-form";

export default function SubForm({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

SubForm.Input = function SubFormInput({ ...resProps }) {
  return <Input {...resProps} />;
};

SubForm.Button = function SubFormButton({ children, ...resProps }) {
  return (
    <Button {...resProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt=">" />
    </Button>
  );
};

SubForm.Text = function SubFormText({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};

SubForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
