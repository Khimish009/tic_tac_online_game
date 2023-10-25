import Image from 'next/image'
import Logo from '../image/logo.svg'

export function Header() {
    return (
        <header className="flex h-24 items-center px-8 bg-white shadow-lg">
            <Image 
                src={Logo}
                alt="logo"
            />
            <div className='' />
        </header>
    )
}