type GreetProps = {
    name: string;
    messageCount: number;
};

export const Greet = (props: GreetProps) => {
    return (
        <>
            <div>
                <h1>
                    Hello {props.name}, you have {props.messageCount} unread messages
                </h1>
            </div>
        </>
    );
};
