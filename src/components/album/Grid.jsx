import Image from "next/image";


const Grid = ({ images }) => {
    return (
        <div className="w-screen columns-4 gap-4 px-[12%]">
            {images.map((image, index) => (
                <div key={index} className="mb-4">
                    <Image src={image} alt="gallery-img" />
                </div>
            ))}
        </div>
    )
}

export default Grid;