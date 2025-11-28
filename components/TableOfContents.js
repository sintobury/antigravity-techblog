'use client';

import { useEffect, useState } from 'react';
import styles from './TableOfContents.module.css';

export default function TableOfContents({ headings }) {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = headings.map((heading) => document.getElementById(heading.id));
            let currentActiveId = '';

            // Find the first heading that is currently visible in the viewport
            for (const element of headingElements) {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the top of the heading is within the viewport
                    if (rect.top >= 0 && rect.top < window.innerHeight) {
                        currentActiveId = element.id;
                        break; // Found the top-most visible heading
                    }
                }
            }

            // If we're at the very top, always highlight the first item
            if (window.scrollY < 50 && headings.length > 0) {
                currentActiveId = headings[0].id;
            }

            setActiveId(currentActiveId);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headings]);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Header height + padding
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveId(id);
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className={styles.nav} aria-label="Table of Contents">
            <h4 className={styles.title}>On This Page</h4>
            <ul className={styles.list}>
                {headings.map((heading) => (
                    <li key={heading.id} className={styles.item} style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}>
                        <a
                            href={`#${heading.id}`}
                            className={`${styles.link} ${activeId === heading.id ? styles.active : ''}`}
                            onClick={(e) => handleClick(e, heading.id)}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
