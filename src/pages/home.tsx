import Navbar from "../components/navbar";
import plus_Icon from '../components/images/icons/plus_Icon.svg'
import { BookCard } from "../components/book_card";
import { useState } from "react";
import CreateCard from "../components/create_card";

export function Home() {
    const [createBookIsOpen, setcreateBookIsOpen] = useState<boolean>(false)
    return (
        <>
            <Navbar />
            {createBookIsOpen && <CreateCard setcreateBookIsOpen={setcreateBookIsOpen}/>}
            <div className="container mx-auto pt-9">
                <main>
                    <div className="text-[#fff] flex justify-between items-center">
                        <h1 className="font-bold text-[36px]">You’ve got <span className="text-[#6200EE]">7 book</span></h1>
                        <button className="py-[10px] w-[181px] bg-[#6200EE] flex items-center justify-center te gap-[15px] rounded-[4px]" onClick={() => setcreateBookIsOpen(true)}>
                            <img src={plus_Icon} alt="plus icon" />
                            Create a book
                        </button>
                    </div>
                    <p className="text-[20px] text-[#fff] mb-9">Your books today</p>
                    <div className="grid grid-cols-3 gap-20">
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                    </div>
                </main>
            </div>
        </>
    )
}