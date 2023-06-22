import type { Context, Config } from "https://edge.netlify.com";



export default async (request: Request, context: Context) => {

  let fecha = new Date()
  let rnd = Math.random()

  return Response.json({ fecha, random: rnd });
};