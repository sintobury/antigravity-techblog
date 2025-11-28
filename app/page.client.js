'use client';

import { useState } from 'react';
import PostCard from '@/components/PostCard';
import styles from './page.module.css';

export default function HomeClient({ posts }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Next.js', '문제풀이', '프로젝트'];

    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <main className={styles.main}>
            <div className={styles.filterContainer}>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.grid}>
                {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
}
