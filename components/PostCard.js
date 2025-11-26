import Link from 'next/link';
import styles from './PostCard.module.css';
import ViewCounter from './ViewCounter';

export default function PostCard({ post }) {
    return (
        <div className={styles.card}>
            <Link href={`/blog/${post.id}`} className={styles.link}>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.meta}>
                    <time className={styles.date}>{post.date}</time>
                    <span className={styles.views}>
                        <ViewCounter slug={post.id} />
                    </span>
                </div>
                <p className={styles.excerpt}>{post.excerpt}</p>
            </Link>
        </div>
    );
}
