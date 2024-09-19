import { Star, MapPin } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
// import { useTheme } from "next-themes"

const products = [
  {
    id: 1,
    title: "Supplier 1",
    product_url: "/product-detail",
    image: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Comfortable office chair with lumbar support",
    address: "123 Office St, Ergonomic City",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Supplier 2",
    product_url: "/product-detail",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Adjustable aluminum laptop stand for better posture",
    address: "456 Tech Ave, Gadget Town",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Supplier 3",
    product_url: "/product-detail",
    image: "https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Premium sound with active noise cancellation",
    address: "789 Audio Lane, Sound City",
    rating: 4.8,
  },
  // Add more products as needed
  {
    id: 4,
    title: "Supplier 1",
    product_url: "/product-detail",
    image: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Comfortable office chair with lumbar support",
    address: "123 Office St, Ergonomic City",
    rating: 4.5,
  },
  {
    id: 5,
    title: "Supplier 2",
    product_url: "/product-detail",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Adjustable aluminum laptop stand for better posture",
    address: "456 Tech Ave, Gadget Town",
    rating: 4.2,
  },
  {
    id: 6,
    title: "Supplier 3",
    product_url: "/product-detail",
    image: "https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "Premium sound with active noise cancellation",
    address: "789 Audio Lane, Sound City",
    rating: 4.8,
  },
]

interface ProductGridProps {
  onProductSelect: (productId: number, isSelected: boolean) => void
}

export default function ProductGrid({ onProductSelect }: ProductGridProps) {
  // const { theme } = useTheme()
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg shadow-md overflow-hidden border border-orange-400">
            <Link href={product.product_url} key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <Link href={product.product_url} key={product.id}>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                </Link>
                <Checkbox
                  id={`product-${product.id}`}
                  onCheckedChange={(checked) => onProductSelect(product.id, checked === true)}
                />
              </div>
              {/* <p className={`text-sm mb-2 ${theme==='dark' ? 'text-white' : 'text-black'}`}>{product.detail}</p> */}
              <Link href={product.product_url} key={product.id}>
                <p className={`text-sm mb-2`}>{product.detail}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.address}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                        }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}