
type StyleProps = {
    styles: React.CSSProperties
}

export const Container = ({styles}: StyleProps) => {
    return (
        <div style={styles}>
            <h1>Container</h1>
        </div>
    )
}