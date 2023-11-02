type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
    return (
        <>
            <div>
                <h1>
                    {props.isLoggedIn
                        ? `Welcome back, ${props.name}! You have ${props.messageCount} unread messages.`
                        : `Welcome, lets create an account or login!`

                    }
                </h1>
            </div>
        </>
    );
};
