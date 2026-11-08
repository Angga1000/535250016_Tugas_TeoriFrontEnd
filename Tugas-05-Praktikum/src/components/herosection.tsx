"use client"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const slides: Slide[] = [
    {
        title: "Siluet Waifu",
        subtitle: "Sebuah siluet mata yang menusuk ke dalam",
        imageUrl: "/images/banner_01.webp",
    },
    {
        title: "Senyuman Anime",
        subtitle: "Awali harimu dengan senyuman",
        imageUrl: "/images/banner_02.webp",
    },
    {
        title: "Gojo Satoru",
        subtitle: "Karakter cowo idaman alias my kisahnya perempuan",
        imageUrl: "/images/banner_03.webp",
    },
];

const HeroSection = () => {
    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        className="hero-slide"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.65)), url(${slide.imageUrl})`,
                        }}
                    />
                    <Carousel.Caption>
                        <h1 className="hero-title fw-bold">{slide.title}</h1>
                        <p className="lead d-none d-sm-block">{slide.subtitle}</p>
                        <Button href="#koleksi" variant="danger" className="btn-accent">
                            Lihat Koleksi
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HeroSection;
