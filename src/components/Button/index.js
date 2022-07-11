
const Button = (props) => {
    return(
        <button
            className= {`bg-main-blue text-white font-bold rounded-lg ${props.w} ${props.h}`}
            type={props.type}
            onClick={props.handleClick}>
            {props.ButtonText}
        </button>
    );
}

export default Button;