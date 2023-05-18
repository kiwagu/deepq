import { mergeTypeDefs } from '@graphql-tools/merge';

import InputTypes from './InputTypes';
import Spot from './Spot/typeDefs';

export default mergeTypeDefs([InputTypes, Spot]);
