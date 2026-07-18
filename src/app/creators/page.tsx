import { Navbar } from "@/components/common/navbar/navbar";
import { Footer } from "@/components/common/footer/Footer";
import { FeaturePage as CreatorPage } from "@/components/creators/CreatorsPage";

export default function Creators() {
  return (
    <>
      <Navbar />
      <CreatorPage />
      <Footer />
    </>
  );
}
