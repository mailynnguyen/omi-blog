import Link from "next/link";

const Button = ({ text, className }) => {
    return (
        <Link href="/album" className={className}>
            <div className="transition-transform duration-400 ease-in hover:scale-110 hover:shadow-lg  text-lg text-white rounded-full bg-black inline-block px-[45%] pt-[10%] pb-[14%]">
                <p className="text-nowrap">{text}</p>
                <div className="w-[80%] mx-auto border-white border-b-2"></div>
            </div>
        </Link>
        
    )
}

export default Button;