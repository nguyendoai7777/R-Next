import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { cap } from '@common/helper';

export default function ResearchSlugScreen() {
  const { query } = useRouter();
  useEffect(() => {
    console.log(query);
  });

  return <div>
    <h1>{cap(query.researchSlug as string)} Screen</h1>
  </div>;
}