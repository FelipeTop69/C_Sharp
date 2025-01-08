using LibreriaAPI.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;

namespace LibreriaAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        [HttpGet] // api/genero
        [HttpGet("listado")] // api/genero/listado
        [HttpGet("/listado-generos")] // api/listado-generos
        [OutputCache]
        public List<Genero> Get()
        {
            var repositorio = new RepositorioEnMemoria();
            var generos = repositorio.ObtenerTodosLosGeneros();

            return generos;
        }

        [HttpGet("{id:int}")] // api/generos/69
        [OutputCache]
        public async Task<ActionResult<Genero>> Get(int id)
        {
            var repositorio = new RepositorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(id);

            if (genero == null)
            {
                return NotFound();
            }

            return genero;
        }

        [HttpGet("{nombre}")] // api/generos/Samuel
        public async Task<Genero?> Get(string nombre) //Se esta mandando un valor por defecto a la clase genero
        {
            var repositorio = new RepositorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(1);

            return genero;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Genero genero)
        {
            var repositorio = new RepositorioEnMemoria();
            var yaExisteUnGeneroConDichoNombre = repositorio.Existe(genero.Nombre);

            if (yaExisteUnGeneroConDichoNombre)
            {
                return BadRequest($"Ya existe un genero con el nombre {genero.Nombre}");
            }

            return Ok();
            
        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete() 
        { 

        }
    }
}
