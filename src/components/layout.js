import React from "react"
import { ThemeProvider } from "styled-components"
import { Hero } from "./hero"
import { theme } from "../assets/styles/theme/theme"
import Navigation from "../components/navigation/navigation"
import GlobalStyle from "../assets/styles/globalStyle"
import CookieConsent from "react-cookie-consent"



const Layout = ({ children}) => {
    return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />    
          <Navigation />          
          <Hero />
          {children}
          <CookieConsent
            location="bottom"
            buttonText="Akceptuję"
            aria-label="Akceptuję"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B", fontSize: "12px" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            Nasz serwis, jak większość serwisów internetowych, wykorzystuje tzw.
            pliki cookies. Korzystanie z serwisu oznacza zgodę na ich zapis lub
            wykorzystanie. Zgodnie z Rozporządzeniem Parlamentu Europejskiego
            ws. ochrony danych osobowych oraz Ustawą o ochronie danych osobowych
            informujemy, że korzystanie z elektronicznych formularzy zgłoszeń
            odbywa się z poszanowaniem prawa ochrony danych osobowych. Państwa
            dane osobowe wykorzystywane są tylko na potrzeby świadczonych
            poprzez media elektroniczne usług na Państwa rzecz. Powierzone nam
            tu dane nie są wykorzystywane w żadnych innych celach. Jednocześnie
            informujemy, że mają Państwo prawo żądać ograniczenia przetwarzania
            powierzonych danych, wglądu w posiadane przez nasz serwis dane i
            usunięcia posiadanych danych osobowych.
            <span style={{ fontSize: "11px" }}>
              Więcej informacji można znaleźć w „Polityce prywatności”.
              Akceptuję "Politykę prywatności" i wykorzystania plików cookies w
              serwisie.
            </span>
          </CookieConsent>     
      </ThemeProvider>     
    </>
  )
}

export default Layout
