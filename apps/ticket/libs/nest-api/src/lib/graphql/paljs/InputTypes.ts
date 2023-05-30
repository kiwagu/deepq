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

  enum TicketScalarFieldEnum {
    id
    userId
    spotId
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
    id: UuidFilter
    title: StringFilter
    address: StringNullableFilter
    createdAt: DateTimeFilter
    tickets: TicketListRelationFilter
  }

  input SpotOrderByWithRelationInput {
    id: SortOrder
    title: SortOrder
    address: SortOrder
    createdAt: SortOrder
    tickets: TicketOrderByRelationAggregateInput
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
    id: UuidWithAggregatesFilter
    title: StringWithAggregatesFilter
    address: StringNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
  }

  input TicketWhereInput {
    AND: [TicketWhereInput!]
    OR: [TicketWhereInput!]
    NOT: [TicketWhereInput!]
    id: UuidFilter
    userId: StringNullableFilter
    spotId: StringFilter
    createdAt: DateTimeFilter
    spot: SpotWhereInput
  }

  input TicketOrderByWithRelationInput {
    id: SortOrder
    userId: SortOrder
    spotId: SortOrder
    createdAt: SortOrder
    spot: SpotOrderByWithRelationInput
  }

  input TicketWhereUniqueInput {
    id: String
  }

  input TicketOrderByWithAggregationInput {
    id: SortOrder
    userId: SortOrder
    spotId: SortOrder
    createdAt: SortOrder
    _count: TicketCountOrderByAggregateInput
    _max: TicketMaxOrderByAggregateInput
    _min: TicketMinOrderByAggregateInput
  }

  input TicketScalarWhereWithAggregatesInput {
    AND: [TicketScalarWhereWithAggregatesInput!]
    OR: [TicketScalarWhereWithAggregatesInput!]
    NOT: [TicketScalarWhereWithAggregatesInput!]
    id: UuidWithAggregatesFilter
    userId: StringNullableWithAggregatesFilter
    spotId: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
  }

  input SpotCreateInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
    tickets: TicketCreateNestedManyWithoutSpotInput
  }

  input SpotUncheckedCreateInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
    tickets: TicketUncheckedCreateNestedManyWithoutSpotInput
  }

  input SpotUpdateInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
    tickets: TicketUpdateManyWithoutSpotNestedInput
  }

  input SpotUncheckedUpdateInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
    tickets: TicketUncheckedUpdateManyWithoutSpotNestedInput
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

  input TicketCreateInput {
    id: String
    userId: String
    createdAt: DateTime
    spot: SpotCreateNestedOneWithoutTicketsInput!
  }

  input TicketUncheckedCreateInput {
    id: String
    userId: String
    spotId: String!
    createdAt: DateTime
  }

  input TicketUpdateInput {
    id: String
    userId: String
    createdAt: DateTime
    spot: SpotUpdateOneRequiredWithoutTicketsNestedInput
  }

  input TicketUncheckedUpdateInput {
    id: String
    userId: String
    spotId: String
    createdAt: DateTime
  }

  input TicketCreateManyInput {
    id: String
    userId: String
    spotId: String!
    createdAt: DateTime
  }

  input TicketUpdateManyMutationInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  input TicketUncheckedUpdateManyInput {
    id: String
    userId: String
    spotId: String
    createdAt: DateTime
  }

  input UuidFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    mode: QueryMode
    not: NestedUuidFilter
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

  input TicketListRelationFilter {
    every: TicketWhereInput
    some: TicketWhereInput
    none: TicketWhereInput
  }

  input TicketOrderByRelationAggregateInput {
    _count: SortOrder
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

  input UuidWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    mode: QueryMode
    not: NestedUuidWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
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

  input SpotRelationFilter {
    is: SpotWhereInput
    isNot: SpotWhereInput
  }

  input TicketCountOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    spotId: SortOrder
    createdAt: SortOrder
  }

  input TicketMaxOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    spotId: SortOrder
    createdAt: SortOrder
  }

  input TicketMinOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    spotId: SortOrder
    createdAt: SortOrder
  }

  input TicketCreateNestedManyWithoutSpotInput {
    create: [TicketCreateWithoutSpotInput!]
    connectOrCreate: [TicketCreateOrConnectWithoutSpotInput!]
    createMany: TicketCreateManySpotInputEnvelope
    connect: [TicketWhereUniqueInput!]
  }

  input TicketUncheckedCreateNestedManyWithoutSpotInput {
    create: [TicketCreateWithoutSpotInput!]
    connectOrCreate: [TicketCreateOrConnectWithoutSpotInput!]
    createMany: TicketCreateManySpotInputEnvelope
    connect: [TicketWhereUniqueInput!]
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

  input TicketUpdateManyWithoutSpotNestedInput {
    create: [TicketCreateWithoutSpotInput!]
    connectOrCreate: [TicketCreateOrConnectWithoutSpotInput!]
    upsert: [TicketUpsertWithWhereUniqueWithoutSpotInput!]
    createMany: TicketCreateManySpotInputEnvelope
    set: [TicketWhereUniqueInput!]
    disconnect: [TicketWhereUniqueInput!]
    delete: [TicketWhereUniqueInput!]
    connect: [TicketWhereUniqueInput!]
    update: [TicketUpdateWithWhereUniqueWithoutSpotInput!]
    updateMany: [TicketUpdateManyWithWhereWithoutSpotInput!]
    deleteMany: [TicketScalarWhereInput!]
  }

  input TicketUncheckedUpdateManyWithoutSpotNestedInput {
    create: [TicketCreateWithoutSpotInput!]
    connectOrCreate: [TicketCreateOrConnectWithoutSpotInput!]
    upsert: [TicketUpsertWithWhereUniqueWithoutSpotInput!]
    createMany: TicketCreateManySpotInputEnvelope
    set: [TicketWhereUniqueInput!]
    disconnect: [TicketWhereUniqueInput!]
    delete: [TicketWhereUniqueInput!]
    connect: [TicketWhereUniqueInput!]
    update: [TicketUpdateWithWhereUniqueWithoutSpotInput!]
    updateMany: [TicketUpdateManyWithWhereWithoutSpotInput!]
    deleteMany: [TicketScalarWhereInput!]
  }

  input SpotCreateNestedOneWithoutTicketsInput {
    create: SpotUncheckedCreateWithoutTicketsInput
    connectOrCreate: SpotCreateOrConnectWithoutTicketsInput
    connect: SpotWhereUniqueInput
  }

  input SpotUpdateOneRequiredWithoutTicketsNestedInput {
    create: SpotUncheckedCreateWithoutTicketsInput
    connectOrCreate: SpotCreateOrConnectWithoutTicketsInput
    upsert: SpotUpsertWithoutTicketsInput
    connect: SpotWhereUniqueInput
    update: SpotUncheckedUpdateWithoutTicketsInput
  }

  input NestedUuidFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    not: NestedUuidFilter
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

  input NestedUuidWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    not: NestedUuidWithAggregatesFilter
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

  input TicketCreateWithoutSpotInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  input TicketUncheckedCreateWithoutSpotInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  input TicketCreateOrConnectWithoutSpotInput {
    where: TicketWhereUniqueInput!
    create: TicketUncheckedCreateWithoutSpotInput!
  }

  input TicketCreateManySpotInputEnvelope {
    data: [TicketCreateManySpotInput!]!
    skipDuplicates: Boolean
  }

  input TicketUpsertWithWhereUniqueWithoutSpotInput {
    where: TicketWhereUniqueInput!
    update: TicketUncheckedUpdateWithoutSpotInput!
    create: TicketUncheckedCreateWithoutSpotInput!
  }

  input TicketUpdateWithWhereUniqueWithoutSpotInput {
    where: TicketWhereUniqueInput!
    data: TicketUncheckedUpdateWithoutSpotInput!
  }

  input TicketUpdateManyWithWhereWithoutSpotInput {
    where: TicketScalarWhereInput!
    data: TicketUncheckedUpdateManyWithoutTicketsInput!
  }

  input TicketScalarWhereInput {
    AND: [TicketScalarWhereInput!]
    OR: [TicketScalarWhereInput!]
    NOT: [TicketScalarWhereInput!]
    id: UuidFilter
    userId: StringNullableFilter
    spotId: StringFilter
    createdAt: DateTimeFilter
  }

  input SpotCreateWithoutTicketsInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
  }

  input SpotUncheckedCreateWithoutTicketsInput {
    id: String
    title: String!
    address: String
    createdAt: DateTime
  }

  input SpotCreateOrConnectWithoutTicketsInput {
    where: SpotWhereUniqueInput!
    create: SpotUncheckedCreateWithoutTicketsInput!
  }

  input SpotUpsertWithoutTicketsInput {
    update: SpotUncheckedUpdateWithoutTicketsInput!
    create: SpotUncheckedCreateWithoutTicketsInput!
  }

  input SpotUpdateWithoutTicketsInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  input SpotUncheckedUpdateWithoutTicketsInput {
    id: String
    title: String
    address: String
    createdAt: DateTime
  }

  input TicketCreateManySpotInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  input TicketUpdateWithoutSpotInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  input TicketUncheckedUpdateWithoutSpotInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  input TicketUncheckedUpdateManyWithoutTicketsInput {
    id: String
    userId: String
    createdAt: DateTime
  }

  type AggregateSpot {
    _count: SpotCountAggregateOutputType
    _min: SpotMinAggregateOutputType
    _max: SpotMaxAggregateOutputType
  }

  type AggregateTicket {
    _count: TicketCountAggregateOutputType
    _min: TicketMinAggregateOutputType
    _max: TicketMaxAggregateOutputType
  }

  type SpotCountOutputType {
    tickets: Int!
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

  type TicketCountAggregateOutputType {
    id: Int!
    userId: Int!
    spotId: Int!
    createdAt: Int!
    _all: Int!
  }

  type TicketMinAggregateOutputType {
    id: String
    userId: String
    spotId: String
    createdAt: DateTime
  }

  type TicketMaxAggregateOutputType {
    id: String
    userId: String
    spotId: String
    createdAt: DateTime
  }
`;
