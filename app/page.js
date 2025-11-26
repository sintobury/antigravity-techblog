import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import styles from './page.module.css';

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <section>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to DevBlog</h1>
        <p className={styles.subtitle}>
          Exploring the world of code, one line at a time.
          Deep dives into web development, algorithms, and system design.
        </p>
      </div>
      <div className={styles.grid}>
        {allPostsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
