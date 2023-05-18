import gql from 'graphql-tag';

export default gql`
  type Spot {
    id: String!
    title: String!
    address: String
    createdAt: DateTime!
  }

  type Query {
    findUniqueSpot(where: SpotWhereUniqueInput!): Spot
    findFirstSpot(
      where: SpotWhereInput
      orderBy: [SpotOrderByWithRelationInput]
      cursor: SpotWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SpotScalarFieldEnum]
    ): Spot
    findManySpot(
      where: SpotWhereInput
      orderBy: [SpotOrderByWithRelationInput]
      cursor: SpotWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SpotScalarFieldEnum]
    ): [Spot!]
    findManySpotCount(
      where: SpotWhereInput
      orderBy: [SpotOrderByWithRelationInput]
      cursor: SpotWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SpotScalarFieldEnum]
    ): Int!
    aggregateSpot(
      where: SpotWhereInput
      orderBy: [SpotOrderByWithRelationInput]
      cursor: SpotWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateSpot
  }

  type Mutation {
    createOneSpot(data: SpotCreateInput!): Spot!
    updateOneSpot(data: SpotUpdateInput!, where: SpotWhereUniqueInput!): Spot!
    deleteOneSpot(where: SpotWhereUniqueInput!): Spot
    upsertOneSpot(
      where: SpotWhereUniqueInput!
      create: SpotCreateInput!
      update: SpotUpdateInput!
    ): Spot
    deleteManySpot(where: SpotWhereInput): BatchPayload
    updateManySpot(
      data: SpotUpdateManyMutationInput!
      where: SpotWhereInput
    ): BatchPayload
  }
`;
