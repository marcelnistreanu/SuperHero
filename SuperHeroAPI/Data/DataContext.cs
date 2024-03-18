global using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=superherodb;Trusted_Connection=true;TrustServerCertificate=true;");
    }

    public DbSet<Superhero> SuperHeroes { get; set; }
    public DbSet<User> Users { get; set; }
}
