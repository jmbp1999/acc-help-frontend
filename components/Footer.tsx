import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <section className={styles.footerContainer}>
        <div className={styles.intro}>
          <h3 className={styles.logo}>ACCHELP</h3>
          <p style={{ marginTop: '36px', maxWidth: '270px' }} className={styles.introParagraph}>
            Neque aliquet eu, felis gravida. Mauris tincidunt sit vehicula et rhoncus id. Enim vehicula fringilla fames quam orci. Sit et amet.
          </p>
        </div>
        <div className={styles.quickLinks}>
          <h4 className={styles.quickLink}>Quick Links</h4>
          <div className={styles.linkContainer}>
            <Link className={styles.link} href={'/'}>
              About us
            </Link>
            <Link className={styles.link} href={'/about'}>
              Blog
            </Link>
            <Link className={styles.link} href={'/courses'}>
              Privacy Policy
            </Link>
            <Link className={styles.link} href={'/blog'}>
              Terms and Conditions
            </Link>
            <Link className={styles.link} href={'/contact'}>
              Contact us
            </Link>
          </div>
        </div>
        <div className={styles.newsLetterSection}>
          <h4
            style={{
              marginBottom: '27px',
            }}
          >
            Newsletter
          </h4>
          <div className={styles.emailSection}>
            <input type='email' placeholder='Enter email address' className={styles.emailInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h4 style={{ marginBottom: '29px' }}>Contact</h4>
          <p className={styles.contactText}>Phone: 123-12345678</p>
          <p className={styles.contactText}>info@acchelp.lk</p>
        </div>
      </section>
      <div className={styles.ownership}>
        <div className={styles.termsContainer}>
          <Link href={'/terms-of-user'}>Terms of User</Link>
          <Link href={'/privacy-policy'}>Privacy Policy</Link>
        </div>

        <p>@2022 AccHelp , Designed by Crytec Labs.</p>
      </div>
    </>
  );
}
