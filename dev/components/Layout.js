import Meta from './Meta';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="">
        <main className="">
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
