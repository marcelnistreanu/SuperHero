namespace SuperHeroAPI
{
    public static class Errors
    {
        public static class SuperHero
        {
            public static Error NameIsTaken(string name)
            {
                return new Error("hero.name.is.taken", $"SuperHero '{name}' is taken");
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
}
