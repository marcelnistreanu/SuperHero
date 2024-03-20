using Microsoft.AspNetCore.Mvc;
using SuperHeroAPI.Services.UserService;

namespace SuperHeroAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
    {
        var result = await _authService.Login(loginRequest);
        if(result.IsSuccess)
            return Ok(result.Value);
        return BadRequest(result.Error.Message);
    }

    [HttpPost("signUp")]
    public async Task<IActionResult> SignUp([FromBody] LoginRequest signUpRequest)
    {
        var result = await _authService.SignUp(signUpRequest);
        if(result.IsSuccess)
            return Ok(result.Value);
        return BadRequest(result.Error.Message);
    }
}
