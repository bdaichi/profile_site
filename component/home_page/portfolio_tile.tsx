import { Button } from "@mui/material"
import { useRouter } from "next/router"

type Props = {
    imagePath: string
    portfolioName: string
}

export default function PortfolioTile(props: Props) {
    const router = useRouter()

    const pageRouter = () => {
        router.push({
            pathname: '/portfolio_page',
            query: { portfolioName: props.portfolioName },
        });
    }

    return (
        <div className='mt-56 mx-24 md:mt-24'>
            <Button
                onClick={pageRouter}
            >
                <div className='flex flex-col justify-center items-center m-8 mt-32 md:mt-0 md:p-32'>
                    <img src={props.imagePath} />
                    <p className='text-2xl m-4 my-4 md:text-4xl'>{props.portfolioName}</p>
                </div>
            </Button>
        </div>
    )
}