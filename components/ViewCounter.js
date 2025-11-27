'use client';

import { useState, useEffect } from 'react';

// Global set to track recently incremented slugs to prevent double-counting in Strict Mode
const recentIncrements = new Set();

export default function ViewCounter({ slug, increment = false }) {
    const [views, setViews] = useState(null);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                if (increment) {
                    if (recentIncrements.has(slug)) {
                        return;
                    }
                    recentIncrements.add(slug);
                    // Remove from set after 2 seconds to allow subsequent visits (e.g. refresh) to count
                    setTimeout(() => {
                        recentIncrements.delete(slug);
                    }, 2000);
                }

                const method = increment ? 'POST' : 'GET';
                const res = await fetch(`/api/views/${slug}`, { method });

                if (res.ok) {
                    const data = await res.json();
                    setViews(data.count);
                }
            } catch (error) {
                console.error('Failed to fetch views', error);
            }
        };

        fetchViews();
    }, [slug, increment]);

    if (views === null) {
        return <span>...</span>;
    }

    return <span>{views} views</span>;
}
