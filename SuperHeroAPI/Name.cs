
namespace SuperHeroAPI
{
    public class Name : ValueObject
    {
        public string Value { get; }

        private Name(string value)
        {
            Value = value;
        }

        public static Result<Name> Create(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return Result.Failure<Name>(Errors.General.ValueIsRequired());

            string name = input.Trim();

            if (name.Length > 100)
                return Result.Failure<Name>(Errors.General.ValueIsTooLong());

            return Result.Ok(new Name(name));

        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            throw new NotImplementedException();
        }
    }
}
