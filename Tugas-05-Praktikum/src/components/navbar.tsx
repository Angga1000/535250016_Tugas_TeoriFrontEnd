'use client';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const menus = [
    { id: 'home', label: 'Home' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'koleksi', label: 'Koleksi' },
    { id: 'kontak', label: 'Kontak' },
];

function SiteNavbar() {
    const [active, setActive] = useState<string>('home');

    useEffect(() => {
        // Scroll spy: section yang melewati tengah layar jadi menu aktif
        const sections = menus
            .map((m) => document.getElementById(m.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => observer.observe(s));

        // Section terakhir sering terlalu pendek untuk mencapai tengah layar
        const onScroll = () => {
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom) setActive(menus[menus.length - 1].id);
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" sticky="top" collapseOnSelect data-bs-theme="dark" className="site-navbar">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">
                    Anime<span className="text-accent">Verse</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNav" />
                <Navbar.Collapse id="mainNav">
                    <Nav className="ms-auto">
                        {menus.map((m) => (
                            <Nav.Link
                                key={m.id}
                                href={`#${m.id}`}
                                active={active === m.id}
                                onClick={() => setActive(m.id)}
                            >
                                {m.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNavbar;