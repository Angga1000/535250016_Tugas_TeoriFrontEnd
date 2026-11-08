"use client";
import React, { useState, FormEvent } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";

const features = [
  { icon: "🎨", title: "Visual Pilihan", text: "Artwork dan banner anime yang dikurasi dengan kualitas terbaik." },
  { icon: "⚡", title: "Update Rutin", text: "Koleksi baru ditambahkan secara berkala setiap pekan." },
  { icon: "💬", title: "Komunitas", text: "Tempat berbagi karakter favorit dengan sesama penggemar." },
];

const collections = [
  { title: "Siluet Waifu", text: "Seri monokrom dengan sorot mata yang tajam.", image: "/images/banner_01.webp" },
  { title: "Senyuman Anime", text: "Koleksi ekspresi ceria untuk mengawali hari.", image: "/images/banner_02.webp" },
  { title: "Gojo Satoru", text: "Fan art karakter populer dengan gaya gelap.", image: "/images/banner_03.webp" },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="tentang" className="py-5">
          <Container>
            <h2 className="section-title text-center">Tentang Kami</h2>
            <p className="text-center text-secondary mx-auto mb-5" style={{ maxWidth: 640 }}>
              AnimeVerse adalah ruang untuk menikmati dan mengoleksi visual anime favoritmu
              dalam satu halaman yang rapi dan nyaman dilihat di semua perangkat.
            </p>
            <Row xs={1} md={3} className="g-4">
              {features.map((f) => (
                <Col key={f.title}>
                  <Card className="h-100 text-center feature-card">
                    <Card.Body className="p-4">
                      <div className="feature-icon mb-3">{f.icon}</div>
                      <Card.Title>{f.title}</Card.Title>
                      <Card.Text className="text-secondary">{f.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="koleksi" className="py-5 section-alt">
          <Container>
            <h2 className="section-title text-center mb-5">Koleksi Pilihan</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {collections.map((c) => (
                <Col key={c.title}>
                  <Card className="h-100 collection-card">
                    <Card.Img variant="top" src={c.image} alt={c.title} className="card-img-cover" />
                    <Card.Body>
                      <Card.Title>{c.title}</Card.Title>
                      <Card.Text className="text-secondary">{c.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="kontak" className="py-5">
          <Container>
            <h2 className="section-title text-center mb-5">Hubungi Kami</h2>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                {sent && (
                  <Alert variant="success" dismissible onClose={() => setSent(false)}>
                    Pesan terkirim. Terima kasih!
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="Nama kamu" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nama@email.com" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pesan">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Tulis pesanmu" required />
                  </Form.Group>
                  <Button type="submit" variant="danger" className="btn-accent w-100">
                    Kirim Pesan
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="site-footer py-4 text-center text-secondary">
        <small>© 2026 AnimeVerse · Angga Johanes Thesman – 53250016</small>
      </footer>
    </div>
  );
}