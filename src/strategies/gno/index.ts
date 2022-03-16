//import { getAddress } from '@ethersproject/address';
import { subgraphRequest } from '../../utils';

const GNOSIS_SUBGRAPH_URL = {
  '100': 'https://api.thegraph.com/subgraphs/name/auryn-macmillan/gno-vote-weight'
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
  const params = {
    users: {
      id: true,
      voteWeight: true
    }
  };
  const result = await subgraphRequest(GNOSIS_SUBGRAPH_URL[network], params);
  const score = {};
  result.users.map((user) => {
    score[user.id] = user.voteWeight;
  })
  console.log(score)
  return score || {};
}