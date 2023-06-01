import { useEffect, useState } from "react";
import { ref, onValue,off } from "firebase/database";
import { database } from "../firebase.js";

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database, path);
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          setData(data);
          setIsPending(false);
          setError(null);
        });
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchData();

    // Clean up any event listeners or async tasks if needed
    return () => {
      const dbRef = ref(database, path);
      off(dbRef); // Unsubscribe from the "value" event
    };
  }, [path]);

  return { data, isPending, error };
};

export default useFetch;
