import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export default function Home() {
    return (
        <>
            <div>
                <Swiper slidesPerView={5} spaceBetween={-100} loop={true} centeredSlides={true} grabCursor={true}>
                    <SwiperSlide>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1673384389447-5a4364e7c93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1529636273736-fc88b31ea9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={isActive ? "scale-x-125 opacity-1 transition" : ""}>
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1673481601147-ee95199d3896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
                                    alt=""
                                />
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1676236306466-25ba882070b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRyZXNzfGVufDB8fDB8fHww"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1524504259109-ddd837233694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRyZXNzfGVufDB8fDB8fHww"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1673384389967-e31ea744f3eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRyZXNzfGVufDB8fDB8fHww"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
