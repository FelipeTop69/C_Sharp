using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Entidades;

namespace WebAPI.Controllers
{
    [Route("api/laptops")]
    [ApiController]
    public class LaptopsController : ControllerBase
    {
        private readonly AplicationDbContext context;
        public LaptopsController(AplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<Laptop>> Get()
        {
            return await context.Laptops.ToListAsync();
        }

        [HttpGet("{nombre}/existe")]
        public async Task<ActionResult<bool>> ExisteLaptopConNombre(string nombre, int id)
        {
            await Task.Delay(3000);
            if (id == 0)
            {
                return await context.Laptops.AnyAsync(x => x.Nombre == nombre);
            }
            else
            {
                return await context.Laptops.AnyAsync(x => x.Nombre == nombre && x.Id != id);
            }
        }


        [HttpGet("{id:int}", Name = "ObtenerLaptopPorId")]
        public async Task<ActionResult<Laptop>> Get(int id)
        {
            var laptop = await context.Laptops.FirstOrDefaultAsync(x => x.Id == id);

            if (laptop is null)
            {
                return NotFound();
            }

            return laptop;

        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Laptop laptop)
        {
            var nombreExiste = await context.Laptops.AnyAsync(x => x.Nombre == laptop.Nombre);

            if (nombreExiste)
            {
                var msgError = $"Ya existe una laptop con el nombre {laptop.Nombre}";
                ModelState.AddModelError(nameof(laptop.Nombre), msgError);
                return ValidationProblem(ModelState);
            }

            context.Add(laptop);
            await context.SaveChangesAsync();

            return CreatedAtRoute("ObtenerLaptopPorId", new { id = laptop.Id }, laptop);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] Laptop laptop)
        {
            var existeLaptop = await context.Laptops.AnyAsync(x => x.Id == id);

            if (!existeLaptop)
            {
                return NotFound();
            }

            var nombreExiste = await context.Laptops.AnyAsync(x => x.Nombre == laptop.Nombre && x.Id != id);

            if (nombreExiste)
            {
                var msgError = $"Ya existe una laptop con el nombre {laptop.Nombre}";
                ModelState.AddModelError(nameof(laptop.Nombre), msgError);
                return ValidationProblem(ModelState);
            }


            laptop.Id = id;
            context.Update(laptop);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {

            var registrosBorrados = await context.Laptops.Where(x => x.Id == id).ExecuteDeleteAsync();

            if (registrosBorrados == 0)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
