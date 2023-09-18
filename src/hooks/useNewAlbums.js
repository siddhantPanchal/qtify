import axios from "axios";
import { useEffect, useState } from "react";

export default function useNewAlbums() {
  const [albums, setAlbums] = useState([]);

  const getNewAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setAlbums(res.data);
    } catch (error) {
      console.log(error);
      setAlbums([]);
    }
  };

  useEffect(() => {
    getNewAlbums();
  }, []);

  return albums;
}
