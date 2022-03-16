import { useRouter } from "next/router";

export default function PortfolioPage() {
    const router = useRouter()

    const query = router.query;
    const portfolioName = query.portfolioName as string;

    return (
        <>
            <div>{portfolioName == 'S t o r e L i s t' &&
                <p>1</p>
            }</div>
            <div>{portfolioName == 'StoreList' &&
                <p>2</p>
            }</div>
        </>
    )
}