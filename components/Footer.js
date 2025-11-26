import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    © {new Date().getFullYear()} DevBlog. Built with Next.js.
                </p>
            </div>
        </footer>
    );
}
