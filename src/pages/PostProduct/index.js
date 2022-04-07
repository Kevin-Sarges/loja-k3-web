import React, { useContext } from "react";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { AuthContext } from "../../context/auth";

export function PostProduct() {
  const { handleSubmit } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Form submit={handleSubmit} />
    </>
  );
}
