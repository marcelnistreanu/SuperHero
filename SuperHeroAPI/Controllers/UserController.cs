using Microsoft.AspNetCore.Mvc;
using SuperHeroAPI.Services.UserService;

namespace SuperHeroAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
    {
        var result = await _userService.Login(loginRequest);
        if(result.IsSuccess)
            return Ok(result.Value);
        return BadRequest(result.Error.Message);
    }
}
