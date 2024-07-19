import { Injectable, Logger } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { CLIENT_QUERYS } from './common/query/queryClient.js';
import { PORTFOLIO_QUERYS } from './common/query/queryPortFolio.js';
import { envs } from './config/envs.js';

@Injectable()
export class AppService {
  client: GraphQLClient;
  portFolio: GraphQLClient;

  constructor() {
    this.portFolio = new GraphQLClient(envs.portfolio_url);

    this.client = new GraphQLClient(envs.client_url);
  }

  private readonly logger = new Logger('AppService');

  async getPortfolioClientById(clientId: string): Promise<any> {
    const queryPortFolio = PORTFOLIO_QUERYS.getPortfolioById;

    const queryClientById = CLIENT_QUERYS.getClientById;

    const variables = {
      getPorfolioByIdId: clientId,
    };

    const variablesClient = {
      clientId: clientId,
    };

    try {
      const resultPortFolio = await this.portFolio.request(
        queryPortFolio,
        variables,
      );

      const resultClient = await this.client.request(
        queryClientById,
        variablesClient,
      );
      this.logger.log(`data :  ${JSON.stringify(resultPortFolio)}`);
      this.logger.log(`data :  ${JSON.stringify(resultClient)}`);
      return {
        client: resultClient,
        portFolio: resultPortFolio
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}
