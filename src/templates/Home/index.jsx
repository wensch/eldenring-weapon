import { useCallback, useEffect, useState } from "react";

import "./styles.css";

import { Button } from "../../components/Button";
import { Posts } from "../../components/Posts";
import { TextInput } from "../../components/TextInput";
import { loadPostsEldenRing } from "../../utils/load-posts";
import GameOver from "../../components/GameOver";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState();

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPostsEldenRing();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);

    setPage(nextPage);
  };

  return (
    <section className="container">
      <h1 className="title-page">Choose your <strong>weapon</strong></h1>
      <img className="border-image" src="elden-ring-border-leaf.png" alt="elden-ring-border-leaf" />
      <div className="search-container">
        {/* {!!searchValue && <h1>Search value: {searchValue}</h1>} */}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {searchValue === 'game over' && <GameOver />}

      {filteredPosts.length === 0 && <p className="title-page">Não existem posts =(</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
      <img className="footer-image" src="Elden-ring-ornament-icon-feather-two.png" alt="" />
    </section>
  );
};
