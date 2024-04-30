function Card({ product }: any) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img
        className="object-cover w-full h-64"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-600">${product.price}</span>
          <span className="text-green-500">
            {product.discountPercentage}% off
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-600">Rating: {product.rating}</span>
          <span className="text-gray-600">Stock: {product.stock}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
