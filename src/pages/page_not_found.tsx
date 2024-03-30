import { Link } from 'react-router-dom'
import pageNotFoundImg from '../components/images/page_not_found.png'
export default function PageNotFound() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div>
            <img src={pageNotFoundImg} alt="404 page not found" className='mb-[72px]'/>
            <div className='flex justify-center gap-3'>
                <Link to={"/"} className='py-[10px] bg-[#6200EE] text-[#fff] font-medium px-16'>Go Home Page</Link>
                <button onClick={() => window.location.reload()} className='py-[10px] border-[#6200EE] border-[1px] font-medium px-16'>Reload Page</button>
            </div>
        </div>
    </div>
  )
}
