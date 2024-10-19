import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCategories from "./components/ProductCategories";

export default function App() {
  return (
    <div className="bg-app-2">
      <div
        style={{
          backgroundImage: "url('src/assets/AduboporBackground2.4.3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "105vh", // Ensure it takes the full viewport height
          overflow: "hidden", // Prevents content overflow
        }}
      >
        <Header />
        <Hero />
      </div>
      <ProductCategories />
      <div className="relative bg-gradient-to-b from-app-1 to-app-2" style={{ height: "500px" }}>
        <h2 className="text-center pt-20">Scroll Down to See the Button</h2>
      </div>

      <div id="visit" className="relative p-10 bg-app-2">
        <h2>Welcome to the Visit Section!</h2>
        <p>This is the content of the visit section.</p>
      </div>
    </div>
  );
}
