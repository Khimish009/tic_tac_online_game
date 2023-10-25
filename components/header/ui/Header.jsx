import Image from 'next/image'
import Logo from '../image/logo.svg'

export function Header() {
    return (
        <header className="flex h-24 items-center px-8 bg-white shadow-lg">
            <Image 
                src={Logo}
                alt="logo"
            />
            <div className='mx-6 h-8 w-px bg-slate-200' />
            <button className='w-44 bg-teal-600 rounded-lg text-white py-2 px-5 text-2xl leading-tight'>Играть</button>
        </header>
    )
}