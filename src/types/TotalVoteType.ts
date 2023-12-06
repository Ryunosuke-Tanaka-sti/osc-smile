export type TotalVoteType = {
  kinoko: VoteType;
  takenoko: VoteType;
};

type VoteType = {
  count: number;
  happiness: number;
  anger: number;
  diff: number;
};
