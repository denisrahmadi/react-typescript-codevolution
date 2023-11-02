type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = ({status}: StatusProps) => {
    let message

    if (status === 'loading') {
        message = 'loading ...'
    } else if (status === 'success'){
        message = 'data fetch successfully'
    } else if (status === 'error'){
        message = 'error fetching data'
    }

    return (
        <>
            <h1>Status - {message}</h1>
        </>
    )
} 