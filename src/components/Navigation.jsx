import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-50 flex flex-row justify-between bg-white p-[1%] px-[2%]">
            <Link href="/">
                <div className="ml-[2%]">
                    {/* insert image */}
                    <p className="text-3xl font-bold ">Omi!</p>
                </div>
            </Link>
            <Link href="/album" className="text-lg text-omi-gray-200 mr-[6%] self-center">Album</Link>
        </div>
    )
}

export default Navigation;