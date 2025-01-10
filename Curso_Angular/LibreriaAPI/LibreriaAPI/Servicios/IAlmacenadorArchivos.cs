namespace LibreriaAPI.Servicios
{
    public interface IAlmacenadorArchivos
    {
        Task<string> Alamacenar(string contenedor, IFormFile archivo);
        Task Borrar(string? ruta, string contenedor);

        async Task<string> Editar(string? ruta, string contenedor, IFormFile archivo)
        {
            await Borrar(ruta, contenedor);
            return await Alamacenar(contenedor, archivo);
        }
    }
}
