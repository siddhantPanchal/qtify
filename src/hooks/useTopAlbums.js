import axios from "axios";
import { useEffect, useState } from "react";

export default function useTopAlbums() {
  const [albums, setAlbums] = useState([]);

  const getTopAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setAlbums(res.data);
    } catch (error) {
      console.log(error);
      setAlbums([]);
    }
  };

  useEffect(() => {
    getTopAlbums();
  }, []);

  return albums;
}
