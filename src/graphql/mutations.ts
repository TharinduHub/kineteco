/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    dynamicSlug
    productName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    dynamicSlug
    productName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    dynamicSlug
    productName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createPersons = /* GraphQL */ `mutation CreatePersons(
  $input: CreatePersonsInput!
  $condition: ModelPersonsConditionInput
) {
  createPersons(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonsMutationVariables,
  APITypes.CreatePersonsMutation
>;
export const updatePersons = /* GraphQL */ `mutation UpdatePersons(
  $input: UpdatePersonsInput!
  $condition: ModelPersonsConditionInput
) {
  updatePersons(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonsMutationVariables,
  APITypes.UpdatePersonsMutation
>;
export const deletePersons = /* GraphQL */ `mutation DeletePersons(
  $input: DeletePersonsInput!
  $condition: ModelPersonsConditionInput
) {
  deletePersons(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonsMutationVariables,
  APITypes.DeletePersonsMutation
>;
