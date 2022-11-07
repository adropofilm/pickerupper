const CircleWithNum = ({dimension, fill}) => {
    return (
        <>
            <svg height={dimension} width="100">
                <circle cx="50" cy="50" r="40" fill={fill} />
                Sorry, your browser does not support inline SVG.  
            </svg>
        </>
    )
}

export default CircleWithNum;