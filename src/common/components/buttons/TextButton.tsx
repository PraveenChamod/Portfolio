import React from 'react'
import { CommonTypes } from '../../../types/common'

const TextButton = ({ description, onClick }: CommonTypes.TextButtonProps) => {
    return (
        <div>
            <button onClick={onClick} className="bg-[#26bbff] text-lg text-[#101014] transition duration-300 hover:bg-[#61cdff] px-4 py-1 rounded-full h-auto">{description}</button>
        </div>
    )
}

export default TextButton