import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="follower" source="follower" />
        <TextInput label="following" source="following" />
        <NumberInput step={1} label="fuid" source="fuid" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="uid" source="uid" />
      </SimpleForm>
    </Create>
  );
};
