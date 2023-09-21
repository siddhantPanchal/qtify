/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

export default function useCrio(path) {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const res = await axios.get(`https://qtify-backend-labs.crio.do/${path}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
      setData(null);
    }
  }

  useEffect(() => {
    getData();
  }, [path]);

  return [data];
}
