import { PostProvider } from "./10-dependency";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: PostProvider) {
    this.postProvider = postProvider;
  }

  async getPosts() {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
