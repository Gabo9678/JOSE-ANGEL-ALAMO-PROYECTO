import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Icons for the menu toggle

const Carousel = () => {
  const slides = [
    "../../img/carrusel2.jpg",
    "../../img/carrusel3.jpg",
    "../../img/institucion.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia la imagen cada 4 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  let Links = [
    { name: "Inicio", link: "#inicio" },
    { name: "Nosotros", link: "#nosotros" },
    { name: "Historia", link: "#historia" },
    { name: "Objetivos", link: "#objetivos" },
    { name: "Documental", link: "#documental" },
    { name: "Ubicación", link: "#contacto" },
  ];

  // hover:text-gray-500 hover:underline ease-in-out duration-300 transition
  let [open, setOpen] = useState(false);

  return (
    <div className="max-w-[100%] h-[780px] m-auto relative group" id="inicio">
      {/* Header para responsive */}
      <header className="md:hidden fixed top-0 left-0 right-0  bg-white w-full z-20 py-4 flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-base font-bold ">U.E.N JOSE ANGEL ALAMO</span>
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer">
          {open ? <HiX /> : <HiOutlineMenu />}
        </div>
      </header>

      {/* Menu desplegable */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out bg-white w-full fixed top-16 left-0 z-10 ${
          open ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4">
          {Links.map((link) => (
            <li key={link.name} className="my-2">
              <a
                href={link.link}
                className="text-xl hover:text-gray-500 hover:underline ease-in-out duration-300 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resto del contenido (solo para versión web) */}
      <div className="md:flex md:items-start hidden">
        <header className="absolute md:top-0 top-0 left-1/2  translate-x-[-48%] text-white w-full z-20 py-4 flex justify-center items-center gap-4">
          <nav className="nav-links flex md:bg-transparent max-h-[70vh] md:text-white text-black  w-full">
            <ul className="flex items-center justify-between px-12 w-full max-h-[60vh] lg:px-28 ">
              {Links.slice(0, 3).map((link) => (
                <li key={link.name} className="lg:text-xl font-light">
                  <a
                    href={link.link}
                    className="hover:text-gray-500 hover:underline ease-in-out duration-500 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="md:flex items-center w-52 h-64 justify-center md:visible hidden">
                <img
                  src="../../img/alamo-blanco.png"
                  className="w-full h-full mx-auto"
                  alt="Logo de la institución"
                />
              </li>
              {Links.slice(3).map((link) => (
                <li key={link.name} className="lg:text-xl font-light">
                  <a
                    href={link.link}
                    className="hover:text-gray-500 hover:underline ease-in-out duration-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      {/* Carrusel */}
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
          objectFit: "cover",
        }}
        className="w-full h-full bg-center bg-cover duration-500 brightness-35"
      >
        {" "}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="md:text-4xl text-4xl text-white font-bold text-center px-4 py-2 rounded-md">
          FORMANDO GENERACIONES DESDE 1967:
          <br />
          INSPIRANDO EL FUTURO, HONRANDO EL LEGADO
        </h2>
      </div>
      {/* Flecha Izquierda */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Flecha Derecha */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      {/* Puntos de Navegación */}
      <div className="flex justify-center py-2 absolute bottom-0 left-0 right-0">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`text-4xl cursor-pointer ${slideIndex === currentIndex ? "text-yellow-400 opacity-100" : "text-gray-400 opacity-50"}`}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
