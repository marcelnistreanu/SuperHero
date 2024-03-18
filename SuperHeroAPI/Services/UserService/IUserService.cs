namespace SuperHeroAPI.Services.UserService
{
    public interface IUserService
    {
        Task<Result<User>> Login(LoginRequest loginRequest);
    }
}
