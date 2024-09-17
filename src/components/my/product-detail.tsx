'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState('white')
  const [userRating, setUserRating] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const productImages = [
    "https://media.istockphoto.com/id/496730484/photo/apple-watch-sport-42mm-silver-aluminum-case-with-white-band.jpg?s=612x612&w=0&k=20&c=RY2MGp4S-OVqAZm1ZCUDhM6KSmfAJ02RU51l4mJa2EA=",
    "https://t.ctcdn.com.br/doiTNJneBHfdTsf1xL7XtLKlQxQ=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i410289.png",
    "https://www.elgiganten.dk/image/dv_web_D180001002846293/368377/apple-watch-series-7-45mm-gpsesim-stjerneskar-alu-stjerneskar-sportsrem--pdp_main-1920.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5LbVHj6KXLjDJL04WZHEGzWFreq5lk1QDQ&s"
  ]

  const comments = [
    { id: 1, author: 'Alice Johnson', rating: 5, comment: 'Absolutely love this water bottle! It keeps my drinks cold all day.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, author: 'Bob Smith', rating: 4, comment: 'Great quality, but I wish it came in more colors.', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, author: 'Charlie Brown', rating: 5, comment: 'Perfect for my daily hikes. Highly recommended!', avatar: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Left column */}
        <div className="flex flex-col-reverse">
          {/* Image gallery */}
          <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div className="relative">
              <img
                src={productImages[currentImageIndex]}
                alt={`Product image ${currentImageIndex + 1}`}
                className="w-full h-full object-center object-cover rounded-lg"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
            <div className="hidden mt-6 sm:grid sm:grid-cols-4 sm:gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`relative rounded-md overflow-hidden ${
                    index === currentImageIndex ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                  <span className="sr-only">View image {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">Apple Watch Series 10</h1>
          
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

      {/* Comment section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-8">Customer Reviews</h2>

        {/* Add a review */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
          <div className="flex items-center mb-4">
            <p className="mr-2">Your Rating:</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 cursor-pointer ${
                  star <= userRating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                onClick={() => setUserRating(star)}
              />
            ))}
          </div>
          <Textarea placeholder="Write your review here..." className="mb-4" />
          <Button>Submit Review</Button>
        </div>

        {/* Existing comments */}
        <div className="space-y-8">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold mr-2">{comment.author}</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= comment.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}