import gql from 'graphql-tag';

import { TicketFields } from '../fields';

export default gql`
  query FindUniqueTicket($where: TicketWhereUniqueInput!) {
    findUniqueTicket(where: $where) {
      ...TicketFields
    }
  }

  query FindFirstTicket(
    $where: TicketWhereInput
    $orderBy: [TicketOrderByWithRelationInput]
    $cursor: TicketWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [TicketScalarFieldEnum]
  ) {
    findFirstTicket(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...TicketFields
    }
  }

  query FindManyTicket(
    $where: TicketWhereInput
    $orderBy: [TicketOrderByWithRelationInput]
    $cursor: TicketWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [TicketScalarFieldEnum]
  ) {
    findManyTicket(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...TicketFields
    }
  }

  query FindManyTicketCount(
    $where: TicketWhereInput
    $orderBy: [TicketOrderByWithRelationInput]
    $cursor: TicketWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [TicketScalarFieldEnum]
  ) {
    findManyTicketCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneTicket($data: TicketCreateInput!) {
    createOneTicket(data: $data) {
      ...TicketFields
    }
  }

  mutation UpdateOneTicket($data: TicketUpdateInput!, $where: TicketWhereUniqueInput!) {
    updateOneTicket(data: $data, where: $where) {
      ...TicketFields
    }
  }

  mutation UpdateManyTicket($data: TicketUpdateManyMutationInput!, $where: TicketWhereInput!) {
    updateManyTicket(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneTicket(
    $where: TicketWhereUniqueInput!
    $create: TicketCreateInput!
    $update: TicketUpdateInput!
  ) {
    upsertOneTicket(where: $where, create: $create, update: $update) {
      ...TicketFields
    }
  }

  mutation DeleteOneTicket($where: TicketWhereUniqueInput!) {
    deleteOneTicket(where: $where) {
      id
    }
  }

  mutation DeleteManyTicket($where: TicketWhereInput!) {
    deleteManyTicket(where: $where) {
      count
    }
  }

  ${TicketFields}
`;
