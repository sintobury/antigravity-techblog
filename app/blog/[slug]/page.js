import { getPostData, getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';
import TableOfContents from '@/components/TableOfContents';
import ViewCounter from '@/components/ViewCounter';

export async function generateMetadata({ params }) {
    const postData = await getPostData(params.slug);
    return {
        title: postData.title,
        description: postData.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }) {
    const postData = await getPostData(params.slug);
    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{postData.title}</h1>
                    <div className={styles.meta}>
                        <time className={styles.date}>{postData.date}</time>
                        <span className={styles.separator}>•</span>
                        <span className={styles.views}>
                            <ViewCounter slug={params.slug} increment={true} />
                        </span>
                    </div>
                </header>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <TableOfContents headings={postData.headings} />
        </div>
    );
}
