using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Services.SuperHeroService;

public interface ISuperHeroService
{
    Task<Result<List<Superhero>>> GetAllHeroes();
    List<Superhero> getHeroesNew();
    Task<Result<Superhero>> GetSingleHero(int id);
    Task<Result<List<Superhero>>> AddHero(Superhero superhero);
    Task<Result<Superhero>> UpdateHero(int id, Superhero superhero);
    Task<Result<List<Superhero>>> DeleteHero(int id);
}
