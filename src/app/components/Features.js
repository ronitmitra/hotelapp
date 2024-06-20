import frame123 from '../../../public/image/Frame 123.png'
import frame120 from '../../../public/image/Frame 120.png'
import frame121 from '../../../public/image/Frame 121.png'
import frame122 from '../../../public/image/Frame 122.png'
import Image from 'next/image'

const Features = () => {
    return (
        <>
            {/* {features section} */}
            <section className="features w-full h-[178px] flex items-center justify-center flex-wrap gap-2">
                    <div className='w-2/5 flex justify-evenly gap-2'>
                    <div>
                        <Image className='frame123'
                        src = {frame123 }
                        alt="frame123"
                        />
                    </div>
                    <div>
                    <Image className='frame120'
                        src = {frame120}
                        alt="frame120"
                        />
                    </div>
                    </div>
                    <div className='w-2/5 flex justify-evenly gap-3'>
                    <div>
                    <Image className='frame121'
                        src = {frame121 }
                        alt="frame121"
                        />
                    </div>
                    <div>
                    <Image className='frame122'
                        src = {frame122}
                        alt="frame122"
                        />
                    </div>
                    </div>                   
            </section>
        </>
    )
}

export default Features