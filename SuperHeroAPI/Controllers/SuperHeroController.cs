using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperHeroAPI.Models;
using SuperHeroAPI.Services.SuperHeroService;
using System.Xml.Linq;

namespace SuperHeroAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SuperHeroController : ControllerBase
{
    private readonly ISuperHeroService _superHeroService;
    public SuperHeroController(ISuperHeroService superHeroService)
    {
        _superHeroService = superHeroService;
    }


    [HttpGet]
    public async Task<ActionResult<List<Superhero>>> GetAllHeroes()
    {
        var result = await _superHeroService.GetAllHeroes();
        if (result.IsSuccess)
            return Ok(result);
        return NotFound(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetSingleHero(int id)
    {
        var result = await _superHeroService.GetSingleHero(id);
        if (result.IsSuccess)
            return Ok(result);
        return NotFound(result);
    }

    [HttpPost]
    public async Task<IActionResult> AddHero(Superhero superhero)
    {

        var result = await _superHeroService.AddHero(superhero);
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        else if (result.Error.Code == "hero.name.is.taken")
        {
            return Conflict(result.Error.Message);
        }
        else
        {
            return BadRequest(result);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateHero(int id, Superhero superhero)
    {
        var result = await _superHeroService.UpdateHero(id, superhero);
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        else if (result.IsFailure && result.Error.Code == "hero.name.is.taken")
        {
            return Conflict(result);
        }
        else
        {
            return NotFound(result);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Superhero>>> DeleteHero(int id)
    {
        var result = await _superHeroService.DeleteHero(id);
        if (result.IsSuccess)
            return Ok(result);
        return NotFound(result);
    }


}
