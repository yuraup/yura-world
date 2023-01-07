import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyles';
import Blog from './pages/logo';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Main />
                </>
              }
            />
            <Route
              path='/blog'
              element={
                <>
                  <Blog />
                </>
              }
            />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
