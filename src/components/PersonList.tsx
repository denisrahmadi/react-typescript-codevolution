type PersonListProps = {
    fullName:{
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <>
            <div>
                {props.fullName.map(name => {
                    return (
                        <h1>{name.first} {name.last}</h1>
                    )
                })}
            </div>
        </>
    )
}