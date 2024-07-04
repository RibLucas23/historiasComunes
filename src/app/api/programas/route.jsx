import { Program } from "@/app/models/Programas.model"
import mongoose from "mongoose"

export async function POST(req) {
   mongoose.connect(process.env.MONGO_URL)
   const data = await req.json()
   console.log(data)
   const ProgramDoc = await Program.create(data)
   return Response.json(ProgramDoc)

}
export async function GET() {
   mongoose.connect(process.env.MONGO_URL)
   return Response.json(
      await Program.find().lean()
   )
}

export async function PUT(req) {
   mongoose.connect(process.env.MONGO_URL)

   const { _id, ...data } = await req.json()
   const ProgramDoc = await Program.findByIdAndUpdate(_id, data)

   return Response.json(true)
}
export async function DELETE(req) {
   mongoose.connect(process.env.MONGO_URL)
   console.log("url")
   const url = new URL(req.url)
   const _id = url.searchParams.get('_id')
   await Program.deleteOne({ _id })
   return Response.json(true)
}