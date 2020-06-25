using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Dtos
{
    public class GetAccount
    {
        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return LastName + ", " + FirstMidName;
            }
        }

        public string LastName { get; private set; }
        public string FirstMidName { get; private set; }
    }
}
