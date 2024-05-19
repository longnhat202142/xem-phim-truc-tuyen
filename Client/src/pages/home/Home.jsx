import { useContext, useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { getMoviesRandom } from "../../movieContext/apiCalls";
import { MovieContext } from "../../movieContext/movieContext";
import "./Home.scss";
import Footer from "../../components/footer/Footer";

const Home = ({ type }) => {
  // const [lists, setLists] = useState([]);
  const { movies, dispatch, isFind } = useContext(MovieContext);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      await getMoviesRandom(type, genre, dispatch);
    };
    getRandomLists();
    // eslint-disable-next-line

    return () => {
      setGenre("");
    };
  }, [type, genre]);

  return (
    <>
      <div className="home">
        <Navbar />

        {isFind ? (
          <List list={movies}></List>
        ) : (
          <>
            <Featured type={type} setGenre={setGenre} />
            {movies &&
              movies.map((list) => <List key={list._id} list={list} />)}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
