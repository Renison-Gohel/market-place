'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function FilterSidebar() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  const clearAll = () => setActiveFilters([])

  const FilterContent = () => (
    <div className="p-4 border border-orange-400 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Refine</h2>
        <Button variant="ghost" size="sm" onClick={clearAll}>
          Clear All
        </Button>
      </div>

      {/* Group By dropdown */}
      <div className="mb-4">
        <Label htmlFor="groupBy">GROUP BY</Label>
        <select id="groupBy" className="p-1 w-full mt-1 rounded-md border-gray-300">
          <option>Select option</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Filter By section */}
      <div>
        <div className="flex items-center mb-2">
          <Filter className="mr-2 h-4 w-4" />
          <span className="font-semibold">FILTER BY</span>
        </div>

        {/* Category filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">CATEGORY</h3>
          <div className="space-y-2">
            {['Category 1', 'Category 2', 'Category 3'].map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox 
                  id={category} 
                  checked={activeFilters.includes(category)}
                  onCheckedChange={() => toggleFilter(category)}
                />
                <label htmlFor={category} className="ml-2 text-sm">
                  {category} ({Math.floor(Math.random() * 30)})
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Status filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">STATUS</h3>
          <div className="space-y-2">
            {['New', 'Read', 'Deleted'].map((status) => (
              <div key={status} className="flex items-center">
                <Checkbox 
                  id={status} 
                  checked={activeFilters.includes(status)}
                  onCheckedChange={() => toggleFilter(status)}
                />
                <label htmlFor={status} className="ml-2 text-sm">
                  {status} ({Math.floor(Math.random() * 50)})
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Date filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">DATE</h3>
          <RadioGroup defaultValue="today">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="today" id="today" />
              <Label htmlFor="today">Today (0)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lastWeek" id="lastWeek" />
              <Label htmlFor="lastWeek">Last Week (4)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Custom</Label>
            </div>
          </RadioGroup>
          <div className="mt-2 space-y-2">
            <Input type="date" placeholder="From" />
            <Input type="date" placeholder="To" />
          </div>
        </div>

        {/* Flags filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">FLAGS</h3>
          {/* Add flag options here */}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <FilterContent />
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mb-4">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <FilterContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}