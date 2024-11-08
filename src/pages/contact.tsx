import React, { useState } from "react";

import { InputWithLabelType } from "../types/types";

import InputWithLabel from "../components/input/InputWithLabel";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query");
    console.log(query);
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const inputs: InputWithLabelType[] = [
    {
      label: "Username",
      name: "username",
      id: "username",
      placeholder: "Username",
      value: username,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value),
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },
    {
      label: "Description",
      type: "textarea",
      name: "description",
      id: "description",
      placeholder: "Description",
      value: description,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setDescription(e.target.value),
    },
  ];

  return (
    <div className="container mx-auto grid gap-12">
      <PageTitle text="Contact" />
      <div className="mx-auto max-w-xl w-full p-12 border rounded-md">
        <form onSubmit={search} className="grid gap-5">
          {inputs.map((input, i) => (
            <InputWithLabel
              key={i}
              label={input.label}
              type={input.type}
              id={input.id}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          ))}

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
