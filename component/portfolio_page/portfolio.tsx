type Props = {
    portfolioName: string
    summary: string
}

export default function Portfolio(props: Props) {

    return (
        <div>
            <p>{props.portfolioName}</p>
            <p>{props.summary}</p>
        </div>
    )
}