import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";
import { RetweetTitle } from "../retweet/RetweetTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="emailUser" source="emailUser" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="firstNameUser" source="firstNameUser" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="lastNameUser" source="lastNameUser" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordUser" source="passwordUser" />
        <ReferenceArrayInput
          source="retweets"
          reference="Retweet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RetweetTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <TextInput label="usernameUser" source="usernameUser" />
      </SimpleForm>
    </Create>
  );
};
