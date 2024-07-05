const Title = ({text, fontSize}) => {
    return (
            <div className={`inline-block mb-[8%]`}>
                <p className={`${fontSize} font-medium`}>{text}</p>
                <div className={`w-[80%] border-black border-b-2 m-auto mt-[5%]`}></div>
            </div>
    )
}

export default Title;