import axios from "axios";

export default async function handler(req, res) {
  try {
    let response = await axios.get('https://www.googleapis.com/books/v1/volumes?maxResults=12&q=subject:'+req.query.generesearch)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}