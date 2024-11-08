import React, { ChangeEvent, useState } from "react";

import { InputWithLabelProps } from "../types/types";

import Button from "../components/Button";
import InputWithLabel from "../components/input/InputWithLabel";
import PageTitle from "../components/PageTitle";
import Input from "../components/input/Input";

type FormData = {
  username: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    message: "",
  });

  const { username, email, message } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORMDATA", formData);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputs: InputWithLabelProps[] = [
    {
      label: "Nom d'utilisateur",
      name: "username",
      id: "username",
      placeholder: "Entrez votre pseudo",
      value: username,
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Entrez votre e-mail",
      value: email,
    },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      id: "message",
      placeholder: "Tapez votre message",
      value: message,
      disabled: true,
    },
  ];

  return (
    <div className="container mx-auto grid gap-12">
      <PageTitle text="Contact" />
      <div className="mx-auto max-w-xl w-full p-12 border rounded-md">
        <form onSubmit={handleSubmit} className="grid gap-5">
          {inputs.map((input, i) => (
            <InputWithLabel
              key={i}
              label={input.label}
              type={input.type}
              id={input.id}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={handleInputChange}
              required
              disabled={input.disabled}
            />
          ))}
          <Button type="submit">Valider</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
