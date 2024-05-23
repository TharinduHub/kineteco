/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    dynamicSlug
    productName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    dynamicSlug
    productName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    dynamicSlug
    productName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreatePersons = /* GraphQL */ `subscription OnCreatePersons($filter: ModelSubscriptionPersonsFilterInput) {
  onCreatePersons(filter: $filter) {
    id
    dynamicSlug
    fullName
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePersonsSubscriptionVariables,
  APITypes.OnCreatePersonsSubscription
>;
export const onUpdatePersons = /* GraphQL */ `subscription OnUpdatePersons($filter: ModelSubscriptionPersonsFilterInput) {
  onUpdatePersons(filter: $filter) {
    id
    dynamicSlug
    fullName
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePersonsSubscriptionVariables,
  APITypes.OnUpdatePersonsSubscription
>;
export const onDeletePersons = /* GraphQL */ `subscription OnDeletePersons($filter: ModelSubscriptionPersonsFilterInput) {
  onDeletePersons(filter: $filter) {
    id
    dynamicSlug
    fullName
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePersonsSubscriptionVariables,
  APITypes.OnDeletePersonsSubscription
>;
