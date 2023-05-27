import React from "react";
import "./Filtros.css";
import { IoIosArrowDown } from "react-icons/io";
import { GiToggles } from "react-icons/gi";
const Filtros = () => {
  return (
    <>
      <section className="filtros">
        <div className="fitrosBtn">
          <button>
            Auriculares <IoIosArrowDown />
          </button>
          <button>
            Precio <IoIosArrowDown />
          </button>
          <button>
            Resumen <IoIosArrowDown />
          </button>
          <button>
            Color <IoIosArrowDown />
          </button>
          <button>
            Material <IoIosArrowDown />
          </button>
          <button>
            Oferta <IoIosArrowDown />
          </button>
          <button>
            Filtros{" "}
            <span className="toggle">
              <GiToggles />
            </span>
          </button>
        </div>
        <div className="ordenarBtn">
          <button className="ordenar">
            Ordenar por <IoIosArrowDown />
          </button>
        </div>
      </section>
    </>
  );
};

export { Filtros };
