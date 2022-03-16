import NavBar from "../component/common/nav_bar";
import PortfolioTile from "../component/home_page/portfolio_tile";
import ProfileFeild from "../component/home_page/profile_feild";

export default function HomePage() {

    return (
        <>
            <div className='flex justify-center'>
                <NavBar />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center m-8'>
                    <ProfileFeild />
                </div>
                <div className='absolute top-64 md:top-0 z-0'>
                    <PortfolioTile imagePath='storeList.jpg' portfolioName='Store List' />
                </div>
            </div>
        </>
    )
}