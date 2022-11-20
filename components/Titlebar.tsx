import Link from 'next/link';
import styles from '../styles/Titlebar.module.css';
import Image from 'next/image';
export default function Titlebar() {
  return (
    <div className={styles.titleBar}>
      <div className={styles.titleContainer}>
        <Link href={'/home'}>View all courses</Link>
        <Link href={'/home'}>Ordinary Level</Link>
        <Link href={'/home'}>Advanced Level</Link>
        <Link href={'/home'}>Chartered(CA)</Link>
        <Link href={'/home'}>CMA</Link>
        <Link href={'/home'}>AAT</Link>
        <Link href={'/home'}>Courses for Professionals</Link>
      </div>
    </div>
  );
}
