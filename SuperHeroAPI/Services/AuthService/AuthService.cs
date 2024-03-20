using Microsoft.AspNetCore.Http.HttpResults;
using SuperHeroAPI.Utils;

namespace SuperHeroAPI.Services.UserService;

public class AuthService : IAuthService
{
    public DataContext _dbContext;

    public AuthService(DataContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<User>> Login(LoginRequest loginRequest)
    {
        var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == loginRequest.Email);

        if (user is null)
            return Result.Failure<User>(Errors.User.NotFound());

        if (user.Password != loginRequest.Password)
            return Result.Failure<User>(Errors.User.WrongPassword());

        return Result.Ok(user);
    }

    public async Task<Result<User>> SignUp(LoginRequest signUpRequest)
    {
        if (signUpRequest == null || string.IsNullOrEmpty(signUpRequest.Email) || string.IsNullOrEmpty(signUpRequest.Password))
        {
            return Result.Failure<User>(Errors.User.MissingEmailAndPassword());
        }

        var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == signUpRequest.Email);

        if (user is not null)
            return Result.Failure<User>(Errors.User.EmailAlreadyRegistered(signUpRequest.Email));

        User newUser = new User();
        newUser.Email = signUpRequest.Email;
        newUser.Password = signUpRequest.Password;

        _dbContext.Users.Add(newUser);
        await _dbContext.SaveChangesAsync();
        return Result.Ok(newUser);
    }
}
