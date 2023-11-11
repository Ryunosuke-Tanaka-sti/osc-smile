import axios from 'axios';

import { TotalVoteType } from '@/types/TotalVoteType';

export const GetTotalVoteData = async () => {
  const result = await axios.get<TotalVoteType>(
    'https://h-hosokawa-api.azurewebsites.net/api/getTotalPoints?code=0UvJcV-Cr1dm3agauiy-6GCfUNZmwXaix9tg7Coy3rSIAzFu6ZU8Aw=='
  );
  return result.data;
};
