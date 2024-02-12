
export default function Footer() {
    return (
        <footer className=" bg-gray-600 h-80 mx-auto flex justify-around p-3">
            <div className=" w-1/3">
                <ul className=" text-white text-xs sm:text-sm">
                    <li className=" hover:font-semibold hover:text-blue-800 cursor-pointer">Home</li>
                    <li className=" hover:font-semibold hover:text-blue-800 cursor-pointer">Products</li>
                    <li className=" hover:font-semibold hover:text-blue-800 cursor-pointer">Services</li>
                    <li className=" hover:font-semibold hover:text-blue-800 cursor-pointer">About Us</li>
                    <li className=" hover:font-semibold hover:text-blue-800 cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div className=" text-center w-1/3  ">
            <ul className= " my-5 sm:my-6 lg:my-8 text-white font-semibold text-xs sm:text-sm lg:text-lg" >
                    <li>Todos los Derechos Reservados.</li>
                    <li>© Gula Devs Team.</li>                    
                </ul>
            </div>
            <div className=" text-right w-1/3">
            <ul className=" text-white text-xs sm:text-sm">
                    <li className=" hover:font-bold hover:text-red-600  cursor-pointer ">Equipo de Desarrollo de Gula</li>
                    <li>Avenida Libertad 220</li>
                    <li>Benito Juarez</li>
                    <li>Buenos Aires, Argentina</li>
                    <li className=" hover:text-green-500 hover:font-bold cursor-pointer">+54 9 11 1234 5678</li>
                </ul>
            </div>
        </footer>
    )
}

