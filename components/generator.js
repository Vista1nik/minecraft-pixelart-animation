import React, {useState, useEffect, useRef} from 'react'

import gifToBlocks from '../lib/gifToBlocks'

const Generator = props => {
    const gifInputRef = useRef(null)

    return (
        <div>
            <p>Select GIF:</p>
            <input onChange={(e) => {
                gifToBlocks(e.currentTarget.files[0])
                .then(ids => {
                    console.log(ids)
                })
            }} ref={gifInputRef} type="file" />
        </div>
    )
}

export default Generator