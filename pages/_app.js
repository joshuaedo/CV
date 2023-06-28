/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Home.css";
import "@/styles/Card.css";
import "@/styles/Contact.css";
import "@/styles/Stacks.css";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Scripts */}
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
      ></script>
      <Component {...pageProps} />
    </>
  );
}
