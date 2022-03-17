import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function ProfileFeild() {
    const router = useRouter()

    const routerProfilePage = () => {
        router.push('/profile_page')
    }

    return (
        <>
            <Button
                onClick={routerProfilePage}
            >
                <div className='fixed top-32 md:top-44 md:left-8 md:w-56 p-8 md:shadow-2xl rounded-md bg-white z-20 flex flex-col justify-center items-center m-4'>
                    <img className='m-4 h-56 md:h-full rounded-2xl' src='beppudaichi.jpg' />
                    <p className='text-3xl tracking-widest my-4'>別府大地</p>
                </div>
            </Button>
        </>
    )
}