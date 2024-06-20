import Image from 'next/image'
import Frame45 from '../../../public/image/Frame 45.png'
import harbour from '../../../public/image/Harbourlight.png'
import group42 from '../../../public/image/Group 42.png'
import group41 from '../../../public/image/Group 41.png'
import group40 from '../../../public/image/Group 40.png'
import group39 from '../../../public/image/Group 39.png'
function Amenitiespage() {
  return (
    <div className="amenities w-full lg:h-[650px] h-[660px] overflow-hidden">
      <div className="amenities-box lg:h-[550px] mt-8 flex flex-col justify-start items-center ">
        <div className='mt-4 mb-2 w-[182px] h-[79px]'>
          <Image
            src={harbour}
            alt="harbourimg"
          />
        </div>
        <div className='amenitiesfeature mt-4 mb-2 md:w-[600px] sm:w-[450px] sm: h-[160px]lg:w-[777px] lg:h-[144px]'>
          <Image
            src={Frame45}
            alt="Feature and amenities"
          />
        </div>
        <div className='amenitiesimg w-9/10 lg:h-[65vh] flex justify-center flex-wrap mt-2'>
          <div className='flex justify-center mb-2'>
          <Image className='feature-image'
            src={group42}
            alt="group42"
          />
           <Image className='feature-image'
            src={group41}
            alt="group41"
          />
          </div>
          <div className='flex justify-center mb-2'>
          <Image className='feature-image'
            src={group40}
            alt="group40"
          />
           <Image className='feature-image'
            src={group39}
            alt="group39"
          />
          </div>
        </div>
      </div>
      <div className='term-condition w-[60vw] h-auto mr-auto ml-auto flex flex-wrap justify-end mt-2 text-gray-500'>
        <div>
        <span>*T&Cs apply | ** Based on similar branded </span>
          </div>
          <div>
          <span>projects in the last 2 years. Source 1 | Source 2</span>
          </div>      
      </div>
    </div>
  )
}

export default Amenitiespage