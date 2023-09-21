import React from 'react'
import { TextInput, Button } from "@tremor/react";
import { MagnifyingGlassCircleIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

export default function SearchCity({ value, setValue }) {
    return (
        <div className='grid place-items-center mt-5'>
            <div className='max-w-[24rem] flex flex-row gap-3'>
                <TextInput
                    icon={MagnifyingGlassCircleIcon}
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }} />

                <Button icon={ArchiveBoxXMarkIcon} color='gray' onClick={() => {setValue("")}} />
            </div>
        </div>
    )
}
