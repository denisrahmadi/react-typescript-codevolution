type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = ({handleClick}: ButtonProps) => {
    return (
        <>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" 
                onClick={(event) => handleClick(event, 1)}
            >
                Click me
            </button>
        </>
    )
} 