﻿using LibreriaAPI.Entidades;

namespace LibreriaAPI
{
    public class RepositorioEnMemoria
    {
        private List<Genero> _generos;

        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>
            {
                new Genero{Id = 1, Nombre = "Comedia"},
                new Genero{Id = 2, Nombre = "Accion"},
            };
        }

        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        public async Task<Genero?> ObtenerPorId(int id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _generos.FirstOrDefault(g => g.Id == id);

        }

        public bool Existe(string nombre)
        {
            return _generos.Any(g => g.Nombre == nombre);
        }
    }
}
