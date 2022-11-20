import styles from '../styles/Login.module.css';
import google from '../public/google.svg';
import facebook from '../public/facebook.svg';
import Image from 'next/image';
export default function Login() {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.loginContainer}>
        <p className={styles.loginHeadline}>Log in to your account</p>
        <div className={styles.formContainer}>
          <label className={styles.mainLabels}>Username</label>
          <input className={styles.inputs} type='email' id='email' />
          <label className={styles.mainLabels}>Password</label>
          <input className={styles.inputs} type='password' id='password' />
          <div className={styles.remFor}>
            <div className={styles.rememberMeContainer}>
              {' '}
              <input type='checkbox' id='rememberMe' style={{ marginRight: '8px' }} />
              <label className={styles.rememberMeLabel} htmlFor='rememberMe'>
                Remember Password
              </label>
            </div>
            <div className={styles.forgotPassword}>Forgot password?</div>
          </div>
          <button className={styles.login}>Login</button>
          <h5 className={styles.horizontalLine}>OR</h5>
          <button className={styles.socialSign}>
            <Image style={{ marginRight: '5px' }} src={google} alt='google logo' />
            Continue with Google
          </button>
          <button className={styles.socialSign}>
            <Image style={{ marginRight: '5px' }} src={facebook} alt='facebook logo' />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
