import React from 'react'

export default function Sort({defaultValue, options, onChange, value}) {
  return (
      <select
          value={value}
          onChange={event => onChange(event.target.value)}
      >
          <option value="">{defaultValue}</option>
          {options.map(option => (
              <option value={ option.value} key={option.value}>{option.name}</option>
          ))}
    </select>
  )
}
