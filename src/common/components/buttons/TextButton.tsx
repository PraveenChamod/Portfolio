import React from 'react'
import { CommonTypes } from '../../../types/common'

const TextButton = ({ description, onClick }: CommonTypes.TextButtonProps) => {
    return (
        <div>
            <button onClick={onClick} className="bg-[#101014] text-lg border bg-opacity-40 transition duration-300 hover:bg-gradient-to-tr from-[#03346E] to-purple-500 p-[3px] px-4 py-2 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] h-auto">{description}</button>
        </div>
    )
}

export default TextButton