type GreetProps = {
    name: string;
    place: string;
};

export const Greet = (props: GreetProps) => {
    return (
        <>
            <div>
                <h1>
                    Hello {props.name}, Welcome to {props.place}
                </h1>
            </div>
        </>
    );
};
