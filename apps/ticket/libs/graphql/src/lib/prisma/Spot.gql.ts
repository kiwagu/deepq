import gql from 'graphql-tag';

import { SpotFields } from '../fields';

export default gql`
  query FindUniqueSpot($where: SpotWhereUniqueInput!) {
    findUniqueSpot(where: $where) {
      ...SpotFields
    }
  }

  query FindFirstSpot(
    $where: SpotWhereInput
    $orderBy: [SpotOrderByWithRelationInput]
    $cursor: SpotWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [SpotScalarFieldEnum]
  ) {
    findFirstSpot(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...SpotFields
    }
  }

  query FindManySpot(
    $where: SpotWhereInput
    $orderBy: [SpotOrderByWithRelationInput]
    $cursor: SpotWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [SpotScalarFieldEnum]
  ) {
    findManySpot(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...SpotFields
    }
  }

  query FindManySpotCount(
    $where: SpotWhereInput
    $orderBy: [SpotOrderByWithRelationInput]
    $cursor: SpotWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [SpotScalarFieldEnum]
  ) {
    findManySpotCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneSpot($data: SpotCreateInput!) {
    createOneSpot(data: $data) {
      ...SpotFields
    }
  }

  mutation UpdateOneSpot($data: SpotUpdateInput!, $where: SpotWhereUniqueInput!) {
    updateOneSpot(data: $data, where: $where) {
      ...SpotFields
    }
  }

  mutation UpdateManySpot($data: SpotUpdateManyMutationInput!, $where: SpotWhereInput!) {
    updateManySpot(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneSpot(
    $where: SpotWhereUniqueInput!
    $create: SpotCreateInput!
    $update: SpotUpdateInput!
  ) {
    upsertOneSpot(where: $where, create: $create, update: $update) {
      ...SpotFields
    }
  }

  mutation DeleteOneSpot($where: SpotWhereUniqueInput!) {
    deleteOneSpot(where: $where) {
      id
    }
  }

  mutation DeleteManySpot($where: SpotWhereInput!) {
    deleteManySpot(where: $where) {
      count
    }
  }

  ${SpotFields}
`;
