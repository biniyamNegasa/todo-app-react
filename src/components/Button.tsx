
interface Props {
    name: string,
}

function Button({name}: Props) {
    return (
        <button className={name.toLowerCase()+"button"}>
            {name.toUpperCase()}
        </button>
    );
}

export default Button;