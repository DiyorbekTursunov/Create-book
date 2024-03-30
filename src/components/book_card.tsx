import del_icon from './images/icons/del_icon.png'
import edit_icon from './images/icons/edit_icon.png'

export function BookCard() {
    return (
        <div className="bg-[#fff] text-[#151515] shadow-xl w-[433.33px] p-8 rounded-[12px] relative">
            <h3 className="font-semibold mb-2 text-[18px]">Raspberry Pi User Guide</h3>
            <ul className="flex flex-col gap-1 mb-4">
                <li className="flex gap-1">
                    <span>Cover:</span>
                    <p>http://url.to.book.cover</p>
                </li>
                <li className="flex gap-1">
                    <span>Pages:</span>
                    <p>221</p>
                </li>
                <li className="flex gap-1">
                    <span>Published:</span>
                    <p>2012</p>
                </li>
                <li className="flex gap-1">
                    <span>Isbn:</span>
                    <p>9781118464465</p>
                </li>
            </ul>
            <div className="flex justify-between">
                <span>Eben Upton / 2012</span>
                <span className="py-[2px] rounded-lg text-[#fff] px-[12px] bg-[#FF0000]">
                    New
                </span>
            </div>
            <button className='p-[10px] bg-[#FF4D4F] rounded-t-[6px] rounded-r-[6px] absolute -right-10 shadow-xl top-4'>
                <img src={del_icon} alt="delete icon" />
            </button>
            <button className='p-[11px] bg-[#6200EE] rounded-t-[6px] rounded-r-[6px] absolute -right-10 shadow-xl top-[55px]'>
                <img src={edit_icon} alt="edit icon" />
            </button>
        </div>
    )
}
