const CircleWithNum = ({dimension, fill, number}) => {
    return (
        <>
            <svg height={dimension} width="100">
                <circle cx="50" cy="50" r="40" fill={fill} />
                <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="35" fill="white">{number}</text>  
            </svg>
        </>
    )
}

export default CircleWithNum;