import React from 'react'
import Sort from '../sort/sort'

export default function PostFilter({ filter, setFilter }) {
  return (
      <div>
        <input 
            type="text" 
            placeholder='Search...' 
            onChange={(e) => setFilter({filter , query: e.target.value})}
            value={filter.query}
        />
        <Sort
            defaultValue={"Sort by"}
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
                { value: 'title', name: 'Sort by title' },
                { value: 'description', name: 'Sort by description' }
            ]}
        />
        
    </div>
  )
}
