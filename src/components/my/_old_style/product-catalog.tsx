'use client'

import { useState } from 'react'
import FilterSidebar from './filter-sidebar'
import ProductGrid from './product-grid'
import MessageDialog from './message-dialog'
import { Button } from "@/components/ui/button"

export default function ProductCatalog() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false)

  const handleProductSelect = (productId: number, isSelected: boolean) => {
    setSelectedProducts(prev => 
      isSelected 
        ? [...prev, productId]
        : prev.filter(id => id !== productId)
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar />
        <div className="flex-1">
          <ProductGrid onProductSelect={handleProductSelect} />
          {selectedProducts.length > 0 && (
            <div className="fixed bottom-4 right-4 z-10">
              <Button onClick={() => setIsMessageDialogOpen(true)}>
                Send Message ({selectedProducts.length})
              </Button>
            </div>
          )}
        </div>
      </div>
      <MessageDialog 
        isOpen={isMessageDialogOpen} 
        onClose={() => setIsMessageDialogOpen(false)}
        selectedProductCount={selectedProducts.length}
      />
    </div>
  )
}