using LibreriaAPI.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace LibreriaAPI.DTOs
{
    public class GeneroDTO
    {
        public int Id { get; set; }
        public required string Nombre { get; set; }
    }
}
