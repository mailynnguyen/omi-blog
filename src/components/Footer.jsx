import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-white text-xl flex justify-center items-center bottom-0">
            <p>website created by 
                <Link href="https://www.linkedin.com/in/mailyn-nguyen/">@mailyn-nguyen</Link>
            </p>
        </div>
    )
}

export default Footer;