import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";
import { RetweetTitle } from "../retweet/RetweetTitle";

export const TweetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorTweet" source="authorTweet" />
        <TextInput label="content" source="content" />
        <TextInput label="contentTweet" multiline source="contentTweet" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="retweets"
          reference="Retweet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RetweetTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <DateTimeInput label="timestampTweet" source="timestampTweet" />
      </SimpleForm>
    </Edit>
  );
};
