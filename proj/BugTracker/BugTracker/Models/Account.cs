using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Account
    {
        public int ID { get; set; }

        [MaxLength(256)]
        [Required]
        public string FirstName { get; set; }

        [MaxLength(256)]
        [DefaultValue(" ")]
        public string MiddleName { get; set; }

        [Required]
        [MaxLength(256)]
        public string LastName { get; set; }

        [Display(Name = "Full Name")]
        public string FullName => FirstName + (string.IsNullOrEmpty(MiddleName) ? " " : (" " + MiddleName + " ")) + LastName;

        [MaxLength(1024)]
        public string PhotoUrl { get; set; }

        [Required]
        [MaxLength(256)]
        public string Email { get; set; }

        [DisplayFormat(NullDisplayText = "You need a spirit animal!")]
        [MaxLength(256)]
        public string SpiritAnimal { get; set; }

        [DisplayFormat(NullDisplayText = "I have no bio!")]
        [MaxLength(5000)]
        public string Bio { get; set; }

        public int TeamID { get; set; }

        public ICollection<Assignment> Assignments { get; set; }
    }
}