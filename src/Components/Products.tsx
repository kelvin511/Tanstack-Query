import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React from "react"
import Card from "./Card"

function Products() {
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      let data: [] = []
      try {
        await fetch("http://localhost:3000/products")
          .then((resp) => resp.json())
          .then((obj) => (data = obj))
        console.log(data)
        return data
      } catch (error) {
        throw new Error(error as string)
      }
    },
  })

  const { mutate, isError, isPending, error } = useMutation({
    mutationKey: ["addproduct"],
    mutationFn: async () => {
      try {
        fetch("http://localhost:3000/products/1", {
          method: "PUT",
          body: JSON.stringify({
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 13.5,
            description: "lorem ipsum set",
            image: "",
            category: "electronic",
          }),
        }).then((resp) => console.log(resp))
      } catch (error) {
        throw new Error(error as string)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })
  if (isLoading || isPending) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }
  return (
    <div>
      <button className="mx-6" onClick={() => mutate()}>
        Update
      </button>
      {data?.map((obj: any) => (
        <Card
          product={{ ...obj, rating: "" }}
          key={Math.random() * 546534654}
        />
      ))}
    </div>
  )
}

export default Products
