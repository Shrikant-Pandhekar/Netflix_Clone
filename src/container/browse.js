import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Card, Header, Loading, Player, Slider } from "../components";
import logo from "../test.svg";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "./footer";
import Fuse from "fuse.js";
import axios from "axios";
import data from "../fixtures/background.json";


export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const re = /\s*(?:;|-|:|$)\s*/;
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [slideRows, setSlideRows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  useEffect(() => {
    // For showing dynamic contents only
    async function showMoviesData() {
      const api_key = "fadfffad437da14cdc720ccb46e5ea4a";
      var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          api_key +
          "&with_networks=213"
      );
      setMovies(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    }
    showMoviesData();
  }, []);
  const sel = data[Math.floor(Math.random() * data.length)];
  // console.log(sel);
  useEffect(() => {
    // For showing dynamic contents only
    async function showMoviesName() {
      const api_key = "fadfffad437da14cdc720ccb46e5ea4a";
      var result = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
          api_key +
          "&language=en-US"
      );
      setNames(result.data.genres);
      return result;
    }
    showMoviesName();
  }, []);

  function getCategory(asd) {
    for (var i = 0; i < names.length; i++) {
      if (names[i].id === asd[0]) {
        return names[i].name;
      }
    }
  }

  // "http://image.tmdb.org/t/p/original/" + movies?.backdrop_path;
  // 2049 x 1152
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header
        src={"http://image.tmdb.org/t/p/original/" + movies?.backdrop_path}
        dontShowOnSmallViewPort
      >
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="netflix" />
          <Header.Group>
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
            <Header.TextLink>My List</Header.TextLink>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          {/* <Header.Image src="/images/title/name.png" alt="title" /> */}
          <Header.FeatureCallOut>
            {(movies?.title || movies?.name || movies?.original_name).split(
              re,
              1
            )}
          </Header.FeatureCallOut>
          <Header.Info>
            <span> {(movies?.release_date).split("-", 1)} </span>
            <span>
              <i>{movies?.vote_average}</i>
            </span>
            <span>1h 55min</span>
            <span>{getCategory(movies?.genre_ids)} </span>
          </Header.Info>

          <Header.Text>
            {truncate(movies?.overview, 250)}

            {/* {movies?.title || movies?.name || movies?.original_name} */}
          </Header.Text>
          <Header.Row>
            <Header.PlayButton>
              <Header.Icons src="/images/icons/play.png" />
              Play
            </Header.PlayButton>
            <Header.PlayButton>
              <Header.Icons src="/images/icons/add.png" />
              My List
            </Header.PlayButton>
          </Header.Row>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      {/* <Slider slide={slideRows} cat={category} /> */}
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
