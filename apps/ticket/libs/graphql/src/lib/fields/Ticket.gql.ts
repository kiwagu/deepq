import gql from 'graphql-tag';

export const TicketFields = gql`
  fragment TicketFields on Ticket {
    id
    # TODO: Add fields
  }
`;
