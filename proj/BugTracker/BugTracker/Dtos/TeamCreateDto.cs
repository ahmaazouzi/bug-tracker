﻿using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Dtos
{
    public class TeamCreateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
