export type TotalVoteType = {
  kinoko: VoteType;
  takenoko: VoteType;
};

type VoteType = {
  happiness: number;
  anger: number;
};
