import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"
import AsideNavi from "../components/navigation/asideNavi"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
  background-color: ${({ activecolor, value }) => {
    if (activecolor === true) return "yellow"
    return "white"
  }};
`
const Wrapper = styled.div`
  padding: 75px 20px;
`

const Title = styled.h1`
  text-align: center;
  padding: 40px 0;
`

const RodoPage = () => {
   const [contrastColor, setContrastColor] = useState(false)
   const [plussize, setplussize] = useState(0)
   const [minussize, setminussize] = useState(0)

   const Reset = () => {
     setContrastColor(false), setplussize(0), setminussize(0)
   }

   const Contrast = () => {
     setContrastColor(!contrastColor)
   }

   const GrowFontSize = () => {
     setplussize(plussize + 1)
   }

   const ShrinkFontSize = () => {
     setminussize(minussize + 1)
   }
  
  return (
    <StyledWrapper
      plussize={plussize}
      minussize={minussize}
      activecolor={contrastColor}
      style={{ fontSize: `${16 + plussize - minussize}px` }}
    >
      <SEO title="GOKIS" name="POLITYKA PRYWATNOŚCI" />
      <Layout
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <AsideNavi
        Reset={Reset}
        Contrast={Contrast}
        ShrinkFontSize={ShrinkFontSize}
        GrowFontSize={GrowFontSize}
      />
      <Wrapper
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        <Title>POLITYKA PRYWATNOŚCI</Title>
        <p>serwisu www.gokispilnik.pl</p>
        <div>
          <p>
            Ochrona danych osobowych w ramach serwisu www.gokispilnik.pl Dane
            osobowe przekazywane przez Użytkowników serwisu www.gokispilnik.pl
            przetwarzane są w sposób zgodny z przepisami Rozporządzenia
            Parlamentu Europejskiego i Rady (UE) 2016/679 i Ustawy o Ochronie
            danych osobowych Dz. U. 2018 poz. 1000 regulującymi przetwarzanie
            danych osobowych. Zbiory zgromadzonych danych osobowych Użytkowników
            w serwisie www.gokispilnik.pl podlegają właściwej ochronie, zgodnie
            z ww. przepisami. Pełen dostęp do baz danych posiadają jedynie
            uprawnione osoby zatrudnione w Gminnym Ośrodku Kultury i Sportu
            wyznaczone przez Administratora.
          </p>
          <p>
            Administratorem danych osobowych jest Gminny Ośrodek Kultury i
            Sportu, z siedzibą w Pilnik 2, 11-100 Lidzbark Warmiński.
          </p>
          <p>
            Zgodnie z powyższymi aktami prawnymi Użytkownik ma prawo do
            ograniczenia przetwarzania danych osobowych, wglądu do nich,
            sprostowania i całkowitego usunięcia.
          </p>
          <p>
            Mechanizmy cookies w serwisie www.gokispilnik.pl W związku z
            udostępnianiem usług internetowych, stosuje tzw. cookies, tj. dane
            informatyczne, w szczególności pliki tekstowe, zapisywane przez
            serwery na urządzeniu końcowym użytkownika, które serwery mogą
            odczytać przy każdorazowym połączeniu się z tego urządzenia
            końcowego.
          </p>
          <p>
            Oprogramowanie służące do przeglądania stron internetowych
            (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików
            cookies w urządzeniu końcowym Użytkownika. Użytkownicy serwisu mogą
            dokonać w każdym czasie zmiany ustawień dotyczących plików cookies.
            Ustawienia te mogą zostać zmienione w szczególności w taki sposób,
            aby blokować automatyczną obsługę plików cookies w ustawieniach
            przeglądarki internetowej lub informować o ich każdorazowym
            zamieszczeniu w urządzeniu Użytkownika serwisu internetowego.
          </p>
          <p>
            Szczegółowe informacje o możliwości i sposobach obsługi plików
            cookies dostępne są w ustawieniach oprogramowania (przeglądarki
            internetowej).
          </p>
          <p>
            Niedokonanie zmiany ustawień w zakresie plików cookies oznacza, że
            będą one zamieszczone w urządzeniu końcowym użytkownika, a tym samym
            będziemy przechowywać informacje w urządzeniu końcowym użytkownika i
            uzyskiwać dostęp do tych informacji.
          </p>
          <p>
            Wyłączenie stosowania cookies może spowodować utrudnienia w
            korzystaniu z niektórych usług w ramach serwisu www.gokispilnik.pl.
          </p>
          <p>
            Korzystanie z serwisu www.gokispilnik.pl oznacza zgodę danego
            Użytkownika na zapis cookies lub ich wykorzystanie, po ich
            akceptacji za pośrednictwem portalu www.gokispilnik.pl.
          </p>
          <p>
            Pliki cookies wykorzystywane są w szczególności w celu:
            <ul>
              <li>
                tworzenia statystyk, które m.in. wspierają pozycjonowanie stron,
                ułatwiając dotarcie do niezbędnej Państwu informacji oraz
                ulepszenia ich zawartości;
              </li>
              <li>
                oznaczenia, że wypełniona została formularza kontakt i
                formularza do przesyłania przypisów.
              </li>
            </ul>
          </p>
          <p>
            Kontakt w przypadku Państwa pytań, dotyczących stosowanej przez
            www.gokispilnik.pl polityki prywatności, prosimy o kontakt na adres
            poczty elektronicznej poczta@goskipilnik.pl lub adres siedziby
            Gminnego Ośrodka Kultury i Sportu w Pilniku, Pilnik 2 11-100
            Lidzbark Warmiński.
          </p>
          <p>
            <ul>
              <li>
                <a
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://windows.microsoft.com/pl-PL/windows7/How-to-manage-cookies-in-Internet-Explorer-9"
                >
                  w przeglądarce Internet Explorer
                </a>
              </li>
              <li>
                <a
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                >
                  w przeglądarce Edge
                </a>
              </li>
              <li>
                <a
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="kliknij tu aby otworzć link"
                  href="http://support.mozilla.org/pl/kb/ciasteczka"
                >
                  w przeglądarce Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="kliknij tu aby otworzć link"
                  href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"
                >
                  w przeglądarce Chrome
                </a>
              </li>
              <li>
                <a
                  role="button"
                  rel="noopener noreferrer"
                  aria-label="kliknij tu aby otworzć link"
                  target="_blank"
                  href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL"
                >
                  w przeglądarce Safari
                </a>
              </li>
            </ul>
          </p>
        </div>
      </Wrapper>
      <Footer
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
    </StyledWrapper>
  )
}
export default RodoPage
