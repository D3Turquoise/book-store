import axios from "axios";

export default async function handler(req, res) {
  try {
    let response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=z3Zu1fIbSOMAtMgzEKs11hm5aMkcZueg')
    res.status(200).json(response.data["results"]);
  } catch (error) {
    console.error(error.response);
  }
}