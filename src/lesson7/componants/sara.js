import { useEffect } from "react";
import { useLocalStorage } from "../customHook/localStorage";

export default function Sara() {
  const s = { key: "sara", value: "0583281615" }; // Store key and value
  useLocalStorage(s, "set");  // Set the value in localStorage

  const { data } = useLocalStorage( "sara" , "get"); // Retrieve the value based on the key
  console.log(data);

  return (
    <>
      <p>in sara❤️😍🤣😂❤️😍</p>
      <p>{data}</p>
    </>
  );
}
