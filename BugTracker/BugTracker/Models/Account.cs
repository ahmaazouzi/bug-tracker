using System;
namespace BugTracker.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string PhotoUrl { get; set; }
        public string Email { get; set; }
        public string SpiritAnimal { get; set; }
        public string Bio { get; set; }
        public string Role { get; set; }
    }
}
