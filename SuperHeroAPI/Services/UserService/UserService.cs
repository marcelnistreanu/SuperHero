using SuperHeroAPI.Utils;

namespace SuperHeroAPI.Services.UserService
{
    public class UserService : IUserService
    {
        public DataContext _dbContext;

        public UserService(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Result<User>> Login(LoginRequest loginRequest)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Username == loginRequest.Username);

            if (user is null)
                return Result.Failure<User>(Errors.User.NotFound());

            if (user.Password != loginRequest.Password)
                return Result.Failure<User>(Errors.User.WrongPassword());

            return Result.Ok(user);
        }
    }
}
