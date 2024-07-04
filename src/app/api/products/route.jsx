import { Product } from "@/app/models/product.model"
import mongoose from "mongoose"

export async function POST(req) {
   mongoose.connect(process.env.MONGO_URL)
   const data = await req.json()
   console.log(data)
   const ProductDoc = await Product.create(data)
   return Response.json(ProductDoc)

}
export async function GET() {
   mongoose.connect(process.env.MONGO_URL)
   return Response.json(
      await Product.find().lean()
   )
}

export async function PUT(req) {
   mongoose.connect(process.env.MONGO_URL)

   const { _id, ...data } = await req.json()
   const ProductDoc = await Product.findByIdAndUpdate(_id, data)

   return Response.json(true)
}
export async function DELETE(req) {
   mongoose.connect(process.env.MONGO_URL)
   console.log("url")
   const url = new URL(req.url)
   const _id = url.searchParams.get('_id')
   await Product.deleteOne({ _id })
   return Response.json(true)
}