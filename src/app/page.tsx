import Banner from "@/components/homepage/banner/Banner";
import Header from "@/components/homepage/header/Header";
import Sales from "@/components/homepage/sales/Sales";
import Newest from "@/components/homepage/newest/Newest";
import SearchVsCategory from "@/components/homepage/search-category/SearchVsCategory";
import Footer from "@/components/homepage/footer/footer";
// import { getCategories } from "./queries";

export default async function Home() {
    // const categoriesData = getCategories();
    // const [categories] = await Promise.all([categoriesData]);

    return (
        <section className="w-full  mx-auto ">
            <Header />
            <SearchVsCategory />
            <Banner />

            <div className="w-full max-w-container mx-auto mt-12 px-10">
                <Sales />
                <Newest />
            </div>

            <Footer />
        </section>
    );
}
