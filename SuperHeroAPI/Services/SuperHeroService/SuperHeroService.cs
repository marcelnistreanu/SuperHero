namespace SuperHeroAPI.Services.SuperHeroService
{
    public class SuperHeroService : ISuperHeroService
    {

        private readonly DataContext _context;

        public SuperHeroService(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<List<Superhero>>> AddHero(Superhero superhero)
        {
            Name name = Name.Create(superhero.Name).Value;
 //           if (nameOrError.IsFailure)
    //            return Result.Failure<List<Superhero>>(nameOrError.Error, nameof(superhero.Name));

            superhero.Name = name.Value;

            var isNameTaken = await _context.SuperHeroes.AnyAsync(x => x.Name == superhero.Name);
            if (isNameTaken)
                return Result.Failure<List<Superhero>>(Errors.SuperHero.NameIsTaken(superhero.Name));
            _context.SuperHeroes.Add(superhero);
            await _context.SaveChangesAsync();
            var superheroes = await _context.SuperHeroes.ToListAsync();
            return Result.Ok(superheroes);
        }

        public async Task<Result<List<Superhero>>> DeleteHero(int id)
        {
            var hero = await _context.SuperHeroes.FindAsync(id);
            if (hero is null)
                return Result.Failure<List<Superhero>>(Errors.General.NotFound("Superhero", id));
            _context.SuperHeroes.Remove(hero);
            await _context.SaveChangesAsync();
            var superheroes = await _context.SuperHeroes.ToListAsync();
            return Result.Ok(superheroes);
        }

        public async Task<Result<List<Superhero>>> GetAllHeroes()
        {
            var heroes = await _context.SuperHeroes.ToListAsync();
            if (heroes is null)
                return Result.Failure<List<Superhero>>(Errors.General.NotFound("Superheroes"));
            return Result.Ok(heroes);
        }

        public async Task<Result<Superhero>> GetSingleHero(int id)
        {
            var hero = await _context.SuperHeroes.FindAsync(id);
            if (hero == null)
                return Result.Failure<Superhero>(Errors.General.NotFound("Superhero", id));
            return Result.Ok(hero);
        }



        public async Task<Result<Superhero>> UpdateHero(int id, Superhero superhero)
        {
            var oldHero = await _context.SuperHeroes.FindAsync(id);
            if (oldHero is null)
                return Result.Failure<Superhero>(Errors.General.NotFound("Superhero", id));

            var isNameTaken = await _context.SuperHeroes.AnyAsync(x => x.Id != id && x.Name == superhero.Name);
            if (isNameTaken)
                return Result.Failure<Superhero>(Errors.SuperHero.NameIsTaken(superhero.Name));

            Name name = Name.Create(superhero.Name).Value;

            oldHero.Name = name.Value;
            oldHero.FirstName = superhero.FirstName;
            oldHero.LastName = superhero.LastName;
            oldHero.Place = superhero.Place;

            await _context.SaveChangesAsync();

            return Result.Ok(oldHero);
        }
    }
}
