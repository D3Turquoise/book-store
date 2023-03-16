import axios from "axios";

export default async function handler(req, res) {
  try {
    console.log("search is "+req.query.search);
    let response = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+req.query.search+'=react&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}