import classes from "./header.module.css";
import Link from 'next/link';

const Header = () => {
    return (

        <div>
            <div className={classes.header}>
                <div className={classes.navigations}>

                    <div className={classes["job-categories"]}  >
                        <p>Home</p>
                    </div>

                    <div  className={classes["job-categories"]}>
                        <p>About</p>
                    </div>

                    <div className={classes["job-categories"]}>
                        <p>Events</p>
                    </div>
                </div>
                <div className={classes.go_premium}>
                 <button className={classes.btn}><Link href="https://app.jego.co.in/LoginScreen" >Log In</Link></button>
                </div>
                <div className={classes.go_premium}>
                 <button className={classes.btn}><Link href="https://app.jego.co.in/Signup" >Sign Up</Link></button>
                </div>
            </div>
        </div>
    );
};


export default Header;
