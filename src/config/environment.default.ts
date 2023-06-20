import { IEnvironment } from './environment';

export const environmentDefault: IEnvironment = {
  alternativeLogo: false,
  // TODO: apiUrl is deprecated. Use apiBaseUrl instead.
  apiUrl: 'https://tn-ergo-explorer.anetabtc.io/api/v0',
  apiBaseUrl: 'https://tn-ergo-explorer.anetabtc.io',
  apiUrlV1: 'https://tn-ergo-explorer.anetabtc.io/api/v1',
  blockchain: {
    coinName: 'Erg',
  },
  defaultLocale: 'en',
  environments: [
    {
      name: 'Testnet',
      url: 'https://tn-ergo-explorer.anetabtc.io',
    },
  ],
  isLoggerEnabled: true,
};
