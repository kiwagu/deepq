import gql from 'graphql-tag';

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
  }

  enum SpotScalarFieldEnum {
    id
    title
    address
    createdAt
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  input SpotWhereInput {
    AND: [SpotWhereInput!]
    OR: [SpotWhereInput!]
    NOT: [SpotWhereInput!]
    id: StringFilter
    title: StringFilter
    address: StringNullableFilter
    createdAt: DateTimeFilter
  }

  input SpotOrderByWithRelationInput {
    id: SortOrder
    title: SortOrder
    address: SortOrder
    createdAt: SortOrder
  }

  input SpotWhereUniqueInput {
    id: String
    title: String
  }

  input SpotOrderByWithAggregationInput {
    id: SortOrder
    title: SortOrder
    address: SortOrder
    createdAt: SortOrder
    _count: SpotCountOrderByAggregateInput
    _max: SpotMaxOrderByAggregateInput
    _min: SpotMinOrderByAggregateInput
  }

  input SpotScalarWhereWithAggregatesInput {
    AND: [SpotScalarWhereWithAggregatesInput!]
    OR: [SpotScalarWhereWithAggregatesInput!]
    NOT: [SpotScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    title: StringWithAggregatesFilter
    address: StringNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
  }

  input SpotCreateInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
  }

  input SpotUncheckedCreateInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
  }

  input SpotUpdateInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  input SpotUncheckedUpdateInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  input SpotCreateManyInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
  }

  input SpotUpdateManyMutationInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  input SpotUncheckedUpdateManyInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input SpotCountOrderByAggregateInput {
    id: SortOrder
    title: SortOrder
    address: SortOrder
    createdAt: SortOrder
  }

  input SpotMaxOrderByAggregateInput {
    id: SortOrder
    title: SortOrder
    address: SortOrder
    createdAt: SortOrder
  }

  input SpotMinOrderByAggregateInput {
    id: SortOrder
    title: SortOrder
    address: SortOrder
    createdAt: SortOrder
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  type AggregateSpot {
    _count: SpotCountAggregateOutputType
    _min: SpotMinAggregateOutputType
    _max: SpotMaxAggregateOutputType
  }

  type SpotCountAggregateOutputType {
    id: Int!
    title: Int!
    address: Int!
    createdAt: Int!
    _all: Int!
  }

  type SpotMinAggregateOutputType {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  type SpotMaxAggregateOutputType {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }
`;
