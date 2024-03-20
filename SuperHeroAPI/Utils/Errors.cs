namespace SuperHeroAPI.Utils;

public static class Errors
{
    public static class SuperHero
    {
        public static Error NameIsTaken(string name)
        {
            return new Error("hero.name.is.taken", $"SuperHero '{name}' is taken");
        }
    }

    public static class User
    {
        public static Error NotFound()
        {
            return new Error("record.not.found", "User not found");
        }

        public static Error WrongPassword()
        {
            return new Error("incorrect.password", "Incorrect password");
        }        

        public static Error EmailAlreadyRegistered(String email)
        {
            return new Error("email.registered", $"Email '{email}' is already registered");
        }        

        public static Error MissingEmailAndPassword()
        {
            return new Error("required.email.and.password", "Email and password are required for sign-up.");
        }
    }

    public static class General
    {
        public static Error NotFound(string entityName, long id)
        {
            return new Error("record.not.found", $"'{entityName}' not found for Id {id}");
        }

        public static Error NotFound(string entityName)
        {
            return new Error("record.not.found", $"'{entityName}' not found");
        }

        public static Error ValueIsRequired()
        {
            return new Error("value.required", "Value is required");
        }

        public static Error ValueIsTooLong()
        {
            return new Error("value.too.long", "Value is too long");
        }
    }
}
