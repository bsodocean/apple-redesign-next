import type { NextApiRequest, NextApiResponse } from 'next/types'
type Data = {
    categories: Category[],
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // const categories = await sanityClient.fetch(query)
}