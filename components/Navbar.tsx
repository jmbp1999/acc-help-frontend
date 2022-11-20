import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import lockIcon from '../public/Lock.svg';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ACCHELP</div>

      <div className={styles.navContainer}>
        <Link className={styles.link} href={'/'}>
          Home
        </Link>
        <Link className={styles.link} href={'/about'}>
          About
        </Link>
        <Link className={styles.link} href={'/courses'}>
          Courses
        </Link>
        <Link className={styles.link} href={'/blog'}>
          Blog
        </Link>
        <Link className={styles.link} href={'/contact'}>
          Contact
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.loginButton}>
          <Image src={lockIcon} alt='Lock Icon' />
          <Link href={'/login'}> Login</Link>
        </div>
        <div className={styles.signUpButton}>Sign up for Free</div>
      </div>
    </nav>
  );
}
