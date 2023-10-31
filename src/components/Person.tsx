type PersonProps = {
    fullName: {
        first: string
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return (
        <>
            <h1>{props.fullName.first} {props.fullName.last}</h1>
        </>
    )
}