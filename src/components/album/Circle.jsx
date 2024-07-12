const Circle = ({ bgColor }) => {
    return (
        <div className={`rounded-full h-4 w-4 border-[1.75px] mx-0.5 hover:cursor-pointer transition ease-out ${bgColor} border-omi-gray-200 hover:bg-white`}>

        </div>
    )
}

export default Circle;