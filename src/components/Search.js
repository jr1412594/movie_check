import React from 'react'

export default function Search({
    handleChange
}) {
    return (
        <div>
            <label labelfor='input'>Search: </label>
            <input onChange={ handleChange }type='text' placeholder='search'/>
        </div>
    )
}
