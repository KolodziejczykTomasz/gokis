import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"
import Footer from "../components/footer"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const Wrapper = styled.div`
  padding: 75px 20px;
`
const Title = styled.h1`
  text-align: center;
  padding: 40px 0;
`
const SubTitle = styled.h2`
  padding: 40px 0;
  text-align: center;
`

const AccessiblePage = () => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Deklaracja dostępności" />
    <Layout />
    <Wrapper>
      <Title>Deklaracja dostępności</Title>
      <p>
        Serwis został zaprojektowany tak, aby był możliwy do obsłużenia dla jak
        najszerszej grupy użytkowników, niezależnie od używanej technologii,
        oprogramowania lub posiadanej dysfunkcji. Nieustannie poszukujemy
        rozwiązań aby zwiększyć dostępność i użyteczność naszej strony
        internetowej. Jeżeli masz jakieś uwagi albo komentarze skontaktuj się z
        nami.
      </p>
      <ul>
        <li>Data publikacji strony internetowej: 2021-01-10</li>
        <li>Data ostatniej istotnej aktualizacji: 2021-03-11</li>
        <li> Oświadczenie sporządzono dnia: 2021-03-11</li>
      </ul>
      <p>
        Deklarację sporządzono na podstawie samooceny przeprowadzonej przez
        podmiot publiczny
      </p>

      <SubTitle>Zgodność ze standardami</SubTitle>
      <p>Serwis jest częściowo zgodny ze standardami W3C:</p>

      <SubTitle>Kompatybilność</SubTitle>
      <p>
        Strona internetowa jest częściowo zgodna z ustawą z dnia 4 kwietnia 2019
        r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych
        podmiotów publicznych.
      </p>

      <SubTitle>Wygląd</SubTitle>
      <p>
        Serwis jest wyposażony w mechanizmy ułatwiające przeglądanie treści
        przez osoby niedowidzące. Zmiana wielkości czcionki. Całość serwisu
        oparta jest na stylach CSS.
      </p>

      <SubTitle>Skróty klawiaturowe</SubTitle>
      <p>
        Serwis nie jest wyposażony w skróty klawiaturowe, które mogły by
        wchodzić w konflikt z technologiami asystującymi (np. programy
        czytające), systemem lub aplikacjami użytkowników.
      </p>

      <SubTitle>Dostępność architektoniczna</SubTitle>
      <p>
        Siedziba Gminnego Ośrodka Kultury i Sportu w Pilniku znajduje się w
        budynku przy miejscowości Pilnik nr 2. Budynek jest wyposażony
        pochylnię. Przed wejściem do budynku znajduje się parking z miejscami
        dla osób niepełnosprawnych. Nie ma przeciwwskazań wstępu osoby
        niepełnosprawnej z psem asystującym. Gminny Ośrodek Kultury i Sportu nie
        ma możliwości zapewnienia tłumacza języka migowego na miejscu lub
        online.
      </p>
    </Wrapper>
    <Footer />
  </StyledWrapper>
)

export default AccessiblePage
