using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;


namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }

        public string Bio{ get; set; }
        public ICollection<ActivityAttendee> Activities { get; set; } 

    }
}