import { EnvironmentProd } from '@deepq/common';

class EnvironmentImpl extends EnvironmentProd {}

export const environment = Object.freeze(new EnvironmentImpl());
