import useSWR from 'swr';

import { GetTotalVoteData } from '@/api/votingAPI';

export const useVoteData = () => {
  const { data: totalVote, isLoading: isLoadingTotalVote } = useSWR('totalVote', GetTotalVoteData);
  return { totalVote, isLoadingTotalVote };
};
