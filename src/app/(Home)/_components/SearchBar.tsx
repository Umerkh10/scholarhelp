import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import React from 'react'

function SearchBar() {
  return (

  <Command className='-ml-4 p-3'>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Our Services">
      <CommandItem>Online Class</CommandItem>
      <CommandItem>Online Exam</CommandItem>
      <CommandItem>Online Homework</CommandItem>
      <CommandItem>Online Assignment</CommandItem>
      <CommandItem>Essay Writing</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

  )
}

export default SearchBar