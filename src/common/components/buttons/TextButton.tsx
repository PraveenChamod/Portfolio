import React from 'react'
import { CommonTypes } from '../../../types/common'

const TextButton = ({ description, onClick }: CommonTypes.TextButtonProps) => {
    return (
        <div>
            <button onClick={onClick} className="bg-[#e55a66] text-lg text-white transition duration-300 hover:bg-[#EBCB60] hover:text-black px-4 py-1 rounded-full h-auto">{description}</button>
        </div>
    )
}

export default TextButton