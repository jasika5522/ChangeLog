import Header from "/components/Header/Header";
import "/styles/globals.css";
import { AuthProvider } from "/context/AuthContext";
import { ManageProvider } from "/context/ManageContext";
import { NewProvider } from "/context/NewContext";
import { PublicPageProvider } from "/context/PublicPageContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ManageProvider>
          <NewProvider>
            <PublicPageProvider>
              <Component {...pageProps} />
            </PublicPageProvider>
          </NewProvider>
        </ManageProvider>
      </AuthProvider>
    </>
  );
}
