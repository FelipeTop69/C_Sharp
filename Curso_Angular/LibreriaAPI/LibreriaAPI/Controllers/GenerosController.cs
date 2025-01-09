using LibreriaAPI.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace LibreriaAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        
        private readonly IOutputCacheStore outputCacheStore;
        private readonly ApplicationDbContext context;
        private const string cacheTag = "generos";

        public GenerosController( IOutputCacheStore outputCachStore, ApplicationDbContext context) 
        {
            this.outputCacheStore = outputCachStore;
            this.context = context;
        }

        [HttpGet] // api/genero
        [OutputCache(Tags = [cacheTag])]

        public List<Genero> Get()
        {
            return new List<Genero> { new Genero { Id = 1, Nombre = "Comedia" }, 
                new Genero { Id = 2, Nombre = "Accion" } };
        }

        [HttpGet("{id:int}", Name = "ObtenerGeneroPorId")] // api/generos/69
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genero>> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genero genero)
        {
            context.Add(genero);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerGeneroPorId", new { id = genero.Id }, genero);
        }

        [HttpPut]
        public void Put()
        {
            throw new NotImplementedException();

        }

        [HttpDelete]
        public void Delete() 
        {
            throw new NotImplementedException();

        }
    }
}
