import React from 'react';
import randomstring from 'randomstring';

import {
  TabbedShowLayout,
  Tab,
  List,
  Create,
  SimpleForm,
  Edit,
  Show,
  ReferenceManyField,
  ReferenceField,
  Datagrid,
  EditButton,
  TextField,
  TextInput,
  required,
  email
} from 'react-admin';
import { url } from '../config/connection';

const validateRequired = required();
const validateEmail = [required(), email()];

const GuestsCreate = (props) => {
  return (
    <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="firstName" validate={validateRequired} />
      <TextInput source="phoneNumber" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
    </SimpleForm>
  </Create>
  );
};

const GuestsTitle = ({ record }) => (<span>{record.name}</span>);

const GuestsEdit = props => {
  return (
    <Edit {...props} title={<GuestsTitle />}>
      <SimpleForm redirect="list">
      <TextInput source="firstName" validate={validateRequired} />
      <TextInput source="phoneNumber" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
      </SimpleForm>
    </Edit>
  );
};

const GuestsShow = props => (
    <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Details">
        <TextField source="firstName" />
        <TextField source="phoneNumber" />
        <TextField source="email" />
        <ReferenceField
          source="id"
          reference="guests"
          linkType="show"
        >
          <TextField source="firstName" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

const GuestsList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="firstName" />
      <TextField source="phoneNumber" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default {
  list: GuestsList,
  create: GuestsCreate,
  edit: GuestsEdit,
  show: GuestsShow,
};