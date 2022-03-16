//import { getAddress } from '@ethersproject/address';
import { subgraphRequest } from '../../utils';

const GNOSIS_SUBGRAPH_URL = {
  '1': 'https://api.thegraph.com/subgraphs/name/gnosis/gno-mainnet',
  '2': 'https://api.thegraph.com/subgraphs/name/gnosis/gno-gnosis-chain'
};

export const author = 'nginnever';
export const version = '0.1.0';

export async function strategy(
  _space,
  network,
  _provider,
  addresses,
  options,
  snapshot
) {
  // todo find inputs for subgraph query
  const params = {
    users: {
    },

  };
  console.log('weee')
  console.log(addresses)
  // not sure if we need this
  // if (snapshot !== 'latest') {
  //   // @ts-ignore
  //   params.users.liquidityPositions.__args.block = { number: snapshot };
  // }

  // can we remove network requirement to subgraph?
  const result_mainnet = await subgraphRequest(GNOSIS_SUBGRAPH_URL['1'], params);
  // const result_gnosis_chain = await subgraphRequest(GNOSIS_SUBGRAPH_URL['2'], params);
  // const score = result_mainnet + result_gnosis_chain;
  const score = {
    '0xff052381092420b7f24cc97fded9c0c17b2cbbb9': result_mainnet
  }
  return score || {};
}