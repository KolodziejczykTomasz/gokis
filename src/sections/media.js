import React from "react"
import Helmet from "react-helmet"

export const Media = () => (<>
  <Helmet>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v10.0&appId=846721065722078&autoLogAppEvents=1"
      nonce="0YFMTdOJ"
    ></script>
  </Helmet>
  <div
    class="fb-video"
    data-href="https://www.facebook.com/401376726727548/videos/3871769712906151/"
    data-width="500"
    data-show-text="false"
  >
    <blockquote
      cite="https://developers.facebook.com/401376726727548/videos/3871769712906151/"
      class="fb-xfbml-parse-ignore"
    >
      <a href="https://developers.facebook.com/401376726727548/videos/3871769712906151/">
        Dzień Kobiet
      </a>
      <p></p>Opublikowany przez{" "}
      <a href="https://www.facebook.com/Gminny-O&#x15b;rodek-Kultury-i-Sportu-w-Pilniku-401376726727548/">
        Gminny Ośrodek Kultury i Sportu w Pilniku
      </a>{" "}
      Poniedziałek, 8 marca 2021
    </blockquote>
  </div>
</>)
