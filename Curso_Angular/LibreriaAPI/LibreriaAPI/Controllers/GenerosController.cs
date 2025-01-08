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
        private const string cacheTag = "generos";

        public GenerosController( IOutputCacheStore outputCachStore) 
        {
            this.outputCacheStore = outputCachStore;
        }

        [HttpGet] // api/genero
        [OutputCache(Tags = [cacheTag])]

        public List<Genero> Get()
        {
            return new List<Genero> { new Genero { Id = 1, Nombre = "Comedia" }, 
                new Genero { Id = 2, Nombre = "Accion" } };
        }

        [HttpGet("{id:int}")] // api/generos/69
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genero>> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genero genero)
        {
            throw new NotImplementedException();
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
