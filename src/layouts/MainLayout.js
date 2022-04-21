import Footer from "../wrappers/footer/Footer";
import Header from "../wrappers/header/Header";

export default function MainLayout({ children, page }) {
  return (
    <>
      <Header page={page}/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
