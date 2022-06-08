import { CSSProperties } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { ContinentsCards } from "./ContinentsCards";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ContinentsCarousel() {

  const isLargeWindow = useBreakpointValue({
    base: true,
    md: false,
  })

  const pagination: PaginationOptions = {
    clickable: true,
  };

  let style: CSSProperties;

  if (!isLargeWindow) {
    style = {
      "--swiper-theme-color": "#FFBA08",
      "--swiper-navigation-size": "40px",
      "--swiper-pagination-bullet-width": "12px",
      "--swiper-pagination-bullet-height": "12px",
      "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
      "--swiper-pagination-bullet-inactive-opacity": "0.4",
    } as CSSProperties
  } else {
    style = {
      "--swiper-theme-color": "#FFBA08",
      "--swiper-navigation-size": "20px",
      "--swiper-pagination-bullet-width": "8px",
      "--swiper-pagination-bullet-height": "8px",
      "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
      "--swiper-pagination-bullet-inactive-opacity": "0.4",
    } as CSSProperties
  }

  return (
    <Box h={["16rem", "28rem"]} w="85%">
      <Swiper
        style={style}
        navigation={true}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        speed={600}
      >
        <SwiperSlide>
          <ContinentsCards
            href="/continents/africa"
            continent="África" 
            description="Para os aventureiros." 
            image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072" 
            position="0 70%" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentsCards
            href={"/continents/north-america"}
            continent="América do Norte" 
            description="As cidades mais famosas." 
            image="https://images.unsplash.com/photo-1602940659805-770d1b3b9911?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032" 
            position="0 40%" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentsCards
            href="/continents/south-america"
            continent="América do Sul" 
            description="Cenários dignos de filmes." 
            image="https://images.unsplash.com/photo-1646596962091-7b12afcdbfca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936" 
            position="0 80%" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentsCards
            href="/continents/asia" 
            continent="Ásia" 
            description="O maior continente." 
            image="https://images.unsplash.com/photo-1590273833268-7058aa2b81ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" 
            position="0 25%" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentsCards
            href="/continents/europe"
            continent="Europa" 
            description="O continente mais antigo." 
            image="https://images.unsplash.com/photo-1608930716113-42a41e5d4ca2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331" 
            position="0 60%" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentsCards
            href="/continents/oceania"
            continent="Oceania" 
            description="Milhares de ilhas paradisíacas." 
            image="https://images.unsplash.com/photo-1597367624841-1d0e501b2a4e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032" 
            position="0 60%" 
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}