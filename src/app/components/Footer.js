import Image from 'next/image'
import rectangle89 from '../../../public/Rectangle 89.jpg'
import frame101 from '../../../public/image/Frame 101.png'
import footerimg from '../../../public/Footer.png'
const Footer = () => {
    return (
        <div className="Hotel-section w-full h-auto mt-2">
            <div className="-500 w-[70vw] h-[70h] ml-auto mr-auto mt-3">
                <div className='btn-container flex justify-end mb-4'>
                    <div>
                    <button className="footer-btn border bg-blue-800 text-white text-sm w-[150px] h-[45px] rounded-md font-semibold mt-2 mr-2 ml-1 pb-1 hover:scale-105 transition-all ease-in-out delay-100 hover:bg-sky-700">EXTERIOR</button></div>
                    <div>
                    <button className="footer-btn border border-blue-800 text-sm w-[150px] h-[45px] rounded-lg text-blue-800 font-semibold mt-2 mr-3 hover:scale-105 transition-all ease-in-out delay-100 hover:text-orange-500">INTERIOR</button>
                    </div>
                    
                </div>

                <div className='mb-2'>
                    <Image
                        src={rectangle89}
                        alt="Hotel Room"
                    />
                </div>
                <Image
                src={frame101}
                alt="Room"
                />
            </div>
<div className='footer w-[90vw] border border-green-900 h-auto mr-auto ml-auto mt-6'>
<Image
src={footerimg}
alt="footer image"
/>
</div>
        </div>
    )
}

export default Footer