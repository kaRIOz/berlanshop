import Banner from "@/components/homepage/banner/Banner";
import Header from "@/components/homepage/header/Header";
import Newest from "@/components/homepage/newest/Newest";
import Footer from "@/components/homepage/footer/footer";
import HomeCategories from "@/components/homepage/categories/categories";
import Festival from "./../components/homepage/festival/festival";

export default async function Home() {
    // const categoriesData = getCategories();
    // const [categories] = await Promise.all([categoriesData]);
    console.log("hi");

    return (
        <section className="relative z-10 flex w-full flex-col gap-6 pb-10 lg:gap-8 lg:pb-12">
            <Header />
            <Banner />

            <div className="homepage-container pr-2 xl:px-16">
                <Festival />
            </div>
            <div className="homepage-container">
                <HomeCategories />
            </div>
            <div className="homepage-container">
                <Newest />
            </div>

            <Footer />
        </section>
    );
}
