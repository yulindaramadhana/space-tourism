import spaceData from "../../../public/data/data.json";

export default function getLocalData() {
  // const res = await fetch("http://localhost:3000/data/data.json");

  // return res.json();
  return spaceData;
}
