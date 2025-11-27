import { getSortedPostsData } from '@/lib/posts';
import HomeClient from './page.client';

export default function Home() {
  const allPostsData = getSortedPostsData();
  return <HomeClient posts={allPostsData} />;
}
