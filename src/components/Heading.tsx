type ChildrenProps = {
    children: React.ReactNode
}

const Heading = ({children}: ChildrenProps) => {
    return (
        <>
            <h1>{children}</h1>            
        </>
    );
};

export default Heading;