import React from 'react'
import Head from "next/head";
import { PostCard, PostWidget, EmptyCard } from '../../components';
import { getCategoryPost } from '../../services';

const Category = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post.node} key={post.node.title} /> )}
          {posts.length < 1 && <EmptyCard />}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

export async function getStaticProps({ params }) {
  const data = await getCategoryPost(params.slug);

  return {
    props: { posts: data }
  }
}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}