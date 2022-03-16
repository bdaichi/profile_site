import CssBaseline from '@mui/material/CssBaseline';

export default function NavBar() {

    return (
        <div className='fixed top-0 flex flex-col z-10 border-b border-black pb-6 p-12 bg-white' style={{ width: '90%', maxWidth: 1000, }}>
            <CssBaseline />
            <p className='flex justify-center text-4xl tracking-widest md:my-8' style={{ fontFamily: 'Impact', textShadow: '1px 8px 5px', WebkitTextStroke: '1px white' }}>BEPPU DAICHI</p>
        </div>
    )
}