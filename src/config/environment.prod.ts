import { IEnvironment } from './environment';

export const environmentProd: IEnvironment = {
  environments: [
    {
      name: 'Testnet',
      url: 'https://tn-ergo-explorer.anetabtc.io',
    },
  ],
  isLoggerEnabled: false,
};
