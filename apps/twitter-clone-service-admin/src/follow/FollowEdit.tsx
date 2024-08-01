import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FollowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="follower" source="follower" />
        <TextInput label="following" source="following" />
        <NumberInput step={1} label="fuid" source="fuid" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="uid" source="uid" />
      </SimpleForm>
    </Edit>
  );
};
