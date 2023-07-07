export default async function getLocalData() {
  const res = await fetch("http://localhost:3000/data/data.json");

  return res.json();
}
