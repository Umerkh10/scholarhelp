import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import Link from 'next/link'
import React from 'react'

function SearchBar() {
  return (

  <Command className='-ml-4 p-3'>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Our Services">
      <CommandItem>
        <Link href={'/TakeMyExam'}>Take My Exam</Link>
      </CommandItem>
      <CommandItem><Link href={'/TakeMyGREExam'}>Take My GRE Exam</Link></CommandItem>
      <CommandItem>
      <Link href={'/TakeGMATOnlineExam'}>Take GMAT Online Exam</Link>
      </CommandItem>
      <CommandItem><Link href={'/TakeLSATExam'}>Take LSAT Exam Online</Link></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

  )
}

export default SearchBar