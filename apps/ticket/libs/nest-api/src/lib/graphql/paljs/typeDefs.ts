import { mergeTypeDefs } from '@graphql-tools/merge';

import InputTypes from './InputTypes';
import Spot from './Spot/typeDefs';
import Ticket from './Ticket/typeDefs';

export default mergeTypeDefs([InputTypes, Spot, Ticket]);
