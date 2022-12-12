// Fuente: https://gist.github.com/Klerith/29bc2af9e4df3e30cb9ea60d532618e9
import { PostService } from "./09-dependency";
import {
  LocalDataBaseService,
  JsonDatabaseService,
  WebApiPostService,
} from "./10-dependency";

// Main
(async () => {
  // const postProvider = new LocalDataBaseService();
  // const postProvider = new JsonDatabaseService();
  const postProvider = new WebApiPostService();
  const postService = new PostService(postProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
