// import { useHistory } from "react-router";
import classes from "./footer.module.css";
// import googleApp from "./../../assets/imgv2/getonGoogleApp.svg";
// import appleApp from "./../../assets/imgv2/getOnApple.svg";
import Link from 'next/link';

const Footer = () => {

//   let history = useHistory();

  return (
    <div className={classes.footer}>
      <div className={classes.title}>
        Company
        <div className={classes.sub}>
          <p><Link href="https://www.jego.co.in/#about" >About Us</Link></p>
          <p><Link href="https://www.jego.co.in/#" >Blog</Link></p>
          <p><Link href="https://www.jego.co.in/#" >Careers</Link></p>
          <p><Link href="https://www.jego.co.in/#contact" >Contact Us</Link></p>
        </div>
      </div>
      <div className={classes.title}>
        Support
        <div className={classes.sub}>
          <p><Link href="https://www.jego.co.in/#" >Help Center</Link></p>
          <p><Link href="https://www.jego.co.in/#">Safety Center</Link></p>
          <p><Link href="https://www.jego.co.in/#">Community Guidelines</Link></p>
        </div>
      </div>

      <div className={classes.title}>
        Legal
        <div className={classes.sub}>
          <p><Link href="https://www.jego.co.in/cookies-policy/">Cookies Policy</Link></p>
          <p><Link href="https://app.jego.co.in/PrivacyPolicyScreen">Privacy Policy</Link></p>
          <p><Link href="https://app.jego.co.in/TermConditionScreen">Terms of Service</Link></p>
          <p><Link href="https://www.jego.co.in/#">Law Enforcement</Link></p>
        </div>
      </div>
      <div className={classes.title}>
        Install App
        {/* <div className={classes.sub}>
          <img src={} alt="" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.miraclelensapp&hl=en_GB")}/>
          <img src={} alt="" onClick={() => window.open("https://apps.apple.com/pk/app/jego/id1552859701")}/>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
