namespace SuperHeroAPI.Services.UserService;

public interface IAuthService
{
    Task<Result<User>> Login(LoginRequest loginRequest);
    Task<Result<User>> SignUp(LoginRequest signUpRequest);
}
