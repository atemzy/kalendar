"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Door {
    record:{reward:string},
    num:number
}

const Door: React.FC<Door> = ({record,num}) => {
    const [opened,setOpened] = useState<boolean>(false)
    const [canBeOpened, setCanBeOpened] = useState<boolean>(new Date().getMonth() == 11 && new Date().getDate() >= num)

    const handleClick = () => {
        if(!canBeOpened) return
        setOpened(!opened)
    }

    return (
    <div className={`bg-gray-800 rounded-lg p-2 relative ${canBeOpened ? "cursor-pointer" : ""} overflow-x-visible`} onClick={handleClick}>
        <div className='flex z-10 relative'>
            <Image src={"/door.png"} alt='closed door' className={`w-1/2 duration-300 ${opened ? "origin-left" : ""}`} width={512} height={512} style={{transform: `rotate3d(0, 1, 0, 180deg) ${opened ? "rotateY(-120deg)" : ""}`}} />
            <Image src={"/door.png"} alt='closed door' className={`w-1/2 duration-300 ${opened ? "origin-right -translate-x-4" : ""}`} width={512} height={512} style={{transform: opened ? "rotateY(120deg)" : ""}} />
        </div>
        <div className={`absolute z-20 top-0 left-0 w-full h-full justify-center items-center ${opened ? "hidden" : "flex"}`}>
            <div className='relative'>
                <p className='text-lg absolute'>{num}</p>
                <p className='text-xl text-black -ml-0.5 font-bold'><strong>{num}</strong></p>
            </div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <p className='text-sm'>{record.reward}</p>
        </div>
    </div>
    );
};
export default Door;