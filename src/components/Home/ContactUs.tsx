import Link from "next/link";
import style from './home.module.scss';

const ContactUs = () => {
    return (
        <div className={style.contact}>
            <Link href='/contact'>Get in touch</Link>
        </div>
    );
};

export default ContactUs;