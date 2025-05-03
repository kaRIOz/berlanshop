import Banner from "@/components/homepage/banner/Banner";
import Header from "@/components/homepage/header/Header";
import Footer from "@/components/homepage/footer/footer";
import HomeCategories from "@/components/homepage/categories/categories";
import Festival from "./../components/homepage/festival/festival";
import HomeProductList from "@/components/homepage/home-product-list/HomeProductList";
import FourCards from "@/components/homepage/four-cards/FourCards";

export default async function Home() {
    return (
        <section className="relative z-10 flex w-full flex-col gap-6 lg:gap-8">
            <Header />
            <Banner />

            <div className="homepage-container pr-2 xl:px-16">
                <Festival />
            </div>
            <div className="homepage-container">
                <HomeCategories />
            </div>
            <div className="homepage-container">
                <HomeProductList title={"پرفروش‌ترین‌ها"} filterType="best-sell" />
            </div>
            <div className="homepage-container">
                <FourCards />
            </div>
            <div className="homepage-container">
                <HomeProductList title={"جدیدترین‌ها"} filterType="newest" />
            </div>

            <Footer />
        </section>
    );
}
