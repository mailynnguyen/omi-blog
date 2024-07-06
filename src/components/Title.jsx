const Title = ({ text, fontSize, border, margin }) => {
    return (
            <div className={`${margin} inline-block`}>
                <p className={`${fontSize} text-nowrap font-medium text-center`}>{text}</p>
                <div className={`w-[80%] border-black ${border} mx-auto mt-[5%]`}></div>
            </div>
    )
}

export default Title;