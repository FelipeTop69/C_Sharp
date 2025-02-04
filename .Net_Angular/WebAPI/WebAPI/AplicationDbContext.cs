using Microsoft.EntityFrameworkCore;
using WebAPI.Entidades;

namespace WebAPI
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Laptop> Laptops {get; set;}
    }
}
