import { useEffect, useState } from 'react';

export default function useLoading(loading, delay = 500) {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), delay);
  }, [loading]);

  return isLoading;
}
