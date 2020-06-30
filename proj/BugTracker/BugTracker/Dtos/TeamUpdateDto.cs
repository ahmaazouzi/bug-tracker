using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Dtos
{
    public class TeamUpdateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
