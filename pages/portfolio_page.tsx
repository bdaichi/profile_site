import { useRouter } from "next/router";
import Portfolio from "../component/portfolio_page/portfolio";

export default function PortfolioPage() {
    const router = useRouter()

    const query = router.query;
    const portfolioName = query.portfolioName as string;

    const storeListSummary: string = '買い物用のアプリです'

    return (
        <>
            <div>{portfolioName == 'S t o r e L i s t' &&
                <Portfolio portfolioName='Store List' imagePath='storeList.jpg' summary={storeListSummary} />
            }</div>
            <div>{portfolioName == 'StoreList' &&
                <p>2</p>
            }</div>
        </>
    )
}