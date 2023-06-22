import type { Context, Config } from "https://edge.netlify.com";



export default async (request: Request, context: Context) => {

  let fecha = new Date()
  let rnd = Math.random()

  const response = new Response(JSON.stringify({date: fecha, rnd}), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=3600'
    },
  })

  return response
};