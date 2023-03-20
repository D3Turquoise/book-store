import axios from "axios";

export default async function handler(req, res) {
  try {
    console.log("search is "+req.query.generesearch);
    let response = await axios.get('https://www.googleapis.com/books/v1/volumes?maxResults=12&q=subject:'+req.query.generesearch)
    console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}