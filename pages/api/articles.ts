import { GraphQLClient, gql, } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from 'next';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`, 
    }
  })
   
  const query = gql`
    mutation createArticle($content:RichTextAST!) {
      createArticle(data: {content: $content}) { id }
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);    
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
}