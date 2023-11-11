import useSWR from 'swr';

import { GetTotalVoteData } from '@/api/votingAPI';

export const useVoteData = () => {
  const { data: totalVote, isLoading: isLoadingTotalVote } = useSWR('totalVote', GetTotalVoteData, {
    refreshInterval: 10000,
  });
  return { totalVote, isLoadingTotalVote };
};
