/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  dynamicSlug: string,
  productName: string,
};

export type ModelProductConditionInput = {
  dynamicSlug?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  dynamicSlug: string,
  productName: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  dynamicSlug?: string | null,
  productName?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreatePersonsInput = {
  id?: string | null,
  dynamicSlug: string,
  fullName: string,
  title: string,
  description: string,
};

export type ModelPersonsConditionInput = {
  dynamicSlug?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPersonsConditionInput | null > | null,
  or?: Array< ModelPersonsConditionInput | null > | null,
  not?: ModelPersonsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Persons = {
  __typename: "Persons",
  id: string,
  dynamicSlug: string,
  fullName: string,
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePersonsInput = {
  id: string,
  dynamicSlug?: string | null,
  fullName?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeletePersonsInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  dynamicSlug?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelPersonsFilterInput = {
  id?: ModelIDInput | null,
  dynamicSlug?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonsFilterInput | null > | null,
  or?: Array< ModelPersonsFilterInput | null > | null,
  not?: ModelPersonsFilterInput | null,
};

export type ModelPersonsConnection = {
  __typename: "ModelPersonsConnection",
  items:  Array<Persons | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dynamicSlug?: ModelSubscriptionStringInput | null,
  productName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPersonsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dynamicSlug?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonsFilterInput | null > | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonsMutationVariables = {
  input: CreatePersonsInput,
  condition?: ModelPersonsConditionInput | null,
};

export type CreatePersonsMutation = {
  createPersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonsMutationVariables = {
  input: UpdatePersonsInput,
  condition?: ModelPersonsConditionInput | null,
};

export type UpdatePersonsMutation = {
  updatePersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonsMutationVariables = {
  input: DeletePersonsInput,
  condition?: ModelPersonsConditionInput | null,
};

export type DeletePersonsMutation = {
  deletePersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      dynamicSlug: string,
      productName: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonsQueryVariables = {
  id: string,
};

export type GetPersonsQuery = {
  getPersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonsQueryVariables = {
  filter?: ModelPersonsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonsQuery = {
  listPersons?:  {
    __typename: "ModelPersonsConnection",
    items:  Array< {
      __typename: "Persons",
      id: string,
      dynamicSlug: string,
      fullName: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    dynamicSlug: string,
    productName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonsSubscriptionVariables = {
  filter?: ModelSubscriptionPersonsFilterInput | null,
};

export type OnCreatePersonsSubscription = {
  onCreatePersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonsSubscriptionVariables = {
  filter?: ModelSubscriptionPersonsFilterInput | null,
};

export type OnUpdatePersonsSubscription = {
  onUpdatePersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonsSubscriptionVariables = {
  filter?: ModelSubscriptionPersonsFilterInput | null,
};

export type OnDeletePersonsSubscription = {
  onDeletePersons?:  {
    __typename: "Persons",
    id: string,
    dynamicSlug: string,
    fullName: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
