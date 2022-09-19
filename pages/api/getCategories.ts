import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import type { NextApiRequest, NextApiResponse } from 'next/types'
type Data = {
    categories: Category[],
}

const query = groq`*[_type == "category"] {
    _id,
    ...
}| order(title desc)`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const categories = await sanityClient.fetch(query)
    res.status(200).json({categories})
}