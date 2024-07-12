import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-white text-xl flex justify-center items-center bottom-0 py-[2%]">
            <p>website created by 
                <Link href="https://www.linkedin.com/in/mailyn-nguyen/" target="_blank" className="hover:text-omi-gray-200"> @mailyn-nguyen</Link>
            </p>
        </div>
    )
}

export default Footer;