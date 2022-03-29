import { subgraphRequest } from '../../utils';
<<<<<<< HEAD
const { getAddress } = require('@ethersproject/address');
=======
>>>>>>> 06135d630cec30d43eb4da151082631920da094b

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
<<<<<<< HEAD
  const adds = addresses.map((element) => {
    return element.toLowerCase();
  });

  const params = {
    users: {
      __args: {
        where: { id_in: adds },
=======
  const params = {
    users: {
      __args: {
        where: { id_in: addresses },
>>>>>>> 06135d630cec30d43eb4da151082631920da094b
        first: 1000
      },
      id: true,
      voteWeight: true
    }
  };
  if (snapshot !== 'latest') {
    // @ts-ignore
    params.users.__args.block = { number: snapshot };
  }
  const result = await subgraphRequest(options.SUBGRAPH_URL, params);
  const score = {};
  result.users.map((user) => {
<<<<<<< HEAD
    score[getAddress(user.id)] = Number(user.voteWeight);
=======
    score[user.id] = Number(user.voteWeight);
>>>>>>> 06135d630cec30d43eb4da151082631920da094b
  });
  return score || {};
}
