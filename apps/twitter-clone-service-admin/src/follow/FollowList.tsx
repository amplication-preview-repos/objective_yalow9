import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FollowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Follows"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="follower" source="follower" />
        <TextField label="following" source="following" />
        <TextField label="fuid" source="fuid" />
        <TextField label="ID" source="id" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="uid" source="uid" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
