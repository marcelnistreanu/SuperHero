using System.ComponentModel.DataAnnotations;

namespace SuperHeroAPI.Models
{
    public class Superhero
    {
        public int Id { get; set; }

        [Required, NameAttribute]
        public string Name { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;
        public string Place { get; set; } = string.Empty;

    }
}
