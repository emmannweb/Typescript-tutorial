import React, { useEffect, useState } from "react";
import { Book } from "../types/types";

const useFetchData = () => {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [term, setTerm] = useState<string>("react");

  useEffect(() => {
    const fetchData = async () => {
      if (term.length > 3) {
        try {
          setLoading(true);
          const value = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${term}`
          );
          if (!value.ok) {
            throw new Error("An error occured");
          }
          const res = await value.json();
          setData(res.items);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [term]);

  return {
    data,
    loading,
    error,
    term,
    setTerm,
  };
};

export default useFetchData;
