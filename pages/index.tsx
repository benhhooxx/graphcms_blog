import Head from "next/head";
import { PostCard, PostWidget, Categories, CreatePost } from '../components';
import { getPosts } from '../services';
import { PostInterface, GraphInterface } from '../interfaces';
import { FeaturedPosts } from '../components';

export default function Home({ posts }: { posts: GraphInterface.IGraphRequest<PostInterface.IPost>[]}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <CreatePost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: GraphInterface.IGraphRequest<PostInterface.IPost>) => <PostCard post={post.node} key={post.node.title} /> )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || []; 

  return {
    props: { posts }
  }
}