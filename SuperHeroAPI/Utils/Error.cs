using Newtonsoft.Json;
using System;

namespace SuperHeroAPI.Utils;

public class Error : ValueObject
{
    private const string Separator = "||";

    public string Code;
    [JsonProperty(NullValueHandling = NullValueHandling.Include)]
    public string Message;

    internal Error(string code, string message)
    {
        Code = code;
        Message = message;
    }
    protected override IEnumerable<object> GetEqualityComponents()
    {
        yield return Code;
    }

    public string Serialize()
    {
        return $"{Code}{Separator}{Message}";
    }

    public static Error Deserialize(string serialized)
    {
        string[] data = serialized.Split(
            new[] { Separator },
            StringSplitOptions.RemoveEmptyEntries);

        Guard.Require(data.Length >= 2, $"Invalid error serialization: '{serialized}'");

        return new Error(data[0], data[1]);
    }

    public static readonly Error None = new(string.Empty, null);
}
