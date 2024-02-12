
export default function Header() {
    return (
        <div className=' p-3 m-3 h-30 w-auto sm:h-20 bg-gray-400 text-center rounded px-auto align-middle'>
            <ul className=" flex flex-col sm:flex-row sm:gap-6 justify-center py-0 sm:py-4 font-semibold">
                <li className=" hover:text-blue-400 cursor-pointer">Home</li>
                <li className=" hover:text-blue-400 cursor-pointer">Products</li>
                <li className=" hover:text-blue-400 cursor-pointer">Services</li>
                <li className=" hover:text-blue-400 cursor-pointer">About Us</li>
                <li className=" hover:text-blue-400 cursor-pointer">Contacts</li>
            </ul>
        </div>
    )
}


