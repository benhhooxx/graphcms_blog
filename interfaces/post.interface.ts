export interface IPost {
  author: {
    bio: string;
    id: string;
    name: string;
    photo: {
      url: string;
    }
  };
  createdAt: Date;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  }
  categories: {
    name: string;
    slug: string;
  }
}

export interface IRelatedPost {
  createdAt: Date;
  slug: string;
  title: string;
  featuredImage: {
    url: string;
  }
}

