import Banner from "@/components/homepage/banner/Banner";
import Header from "@/components/homepage/header/Header";
import Newest from "@/components/homepage/newest/Newest";
import Footer from "@/components/homepage/footer/footer";
import HomeCategories from "@/components/homepage/categories/categories";

export default async function Home() {
    // const categoriesData = getCategories();
    // const [categories] = await Promise.all([categoriesData]);
    console.log("hi");

    return (
        <section className="w-full  mx-auto ">
            <Header />
            <Banner />

            <div className="w-full max-w-container mx-auto mt-12">
                <HomeCategories />
                <Newest />
            </div>

            <Footer />
        </section>
    );
}
