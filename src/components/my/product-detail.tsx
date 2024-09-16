'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState('white')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Left column */}
        <div className="flex flex-col-reverse">
          {/* Image gallery */}
          <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <img
              src="https://g-1dwpemov4rr.vusercontent.net/placeholder.svg"
              alt="Product image"
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">Eco-Friendly Water Bottle</h1>
          
          {/* Reviews */}
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${
                      rating < 4 ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-muted-foreground">117 reviews</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-primary">$49.99</p>
          </div>

          {/* Product description */}
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-muted-foreground space-y-6">
              <p>
                Stay hydrated in style with our eco-friendly water bottle. Made from sustainable materials,
                this sleek bottle keeps your drinks cold for up to 24 hours or hot for up to 12 hours.
                Perfect for outdoor adventures or everyday use.
              </p>
            </div>
          </div>

          <div className="mt-8">
            {/* Color picker */}
            <div>
              <h3 className="text-sm font-medium text-primary">Color</h3>
              <RadioGroup defaultValue="white" className="mt-2" onValueChange={setSelectedColor}>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="white" id="white" className="sr-only" />
                  <label
                    htmlFor="white"
                    className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === 'white' ? 'ring-2 ring-primary' : ''
                    }`}
                    style={{ backgroundColor: 'white' }}
                  />
                  
                  <RadioGroupItem value="black" id="black" className="sr-only" />
                  <label
                    htmlFor="black"
                    className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === 'black' ? 'ring-2 ring-primary' : ''
                    }`}
                    style={{ backgroundColor: 'black' }}
                  />
                  
                  <RadioGroupItem value="blue" id="blue" className="sr-only" />
                  <label
                    htmlFor="blue"
                    className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === 'blue' ? 'ring-2 ring-primary' : ''
                    }`}
                    style={{ backgroundColor: 'blue' }}
                  />
                </div>
              </RadioGroup>
            </div>

            {/* Size picker */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-primary">Size</h3>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                  Size guide
                </a>
              </div>

              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xs">16 oz</SelectItem>
                  <SelectItem value="s">20 oz</SelectItem>
                  <SelectItem value="m">24 oz</SelectItem>
                  <SelectItem value="l">32 oz</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
              <Button size="lg" className="flex-1 flex items-center justify-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to cart
              </Button>
              <Button size="lg" variant="outline" className="mt-4 sm:mt-0">
                <Heart className="mr-2 h-5 w-5" />
                Add to wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}