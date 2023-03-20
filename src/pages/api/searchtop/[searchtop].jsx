import axios from "axios";

export default async function handler(req, res) {
  try {
    //console.log("search is in searchtop"+req.query.searchtop);
    let response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:'+req.query.searchtop)
    console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}