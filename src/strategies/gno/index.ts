import { subgraphRequest } from '../../utils';

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
  const result = await subgraphRequest(options.SUBGRAPH_URL[network], params);
  const score = {};
  result.users.map((user) => {
    score[user.id] = Number(user.voteWeight);
  });
  return score || {};
}
