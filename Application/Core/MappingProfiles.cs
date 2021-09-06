using System.Linq;
using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{ 
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>().ForMember
            (d=>d.HostUsername, o=>o.MapFrom(s=>s.Attendees
            .FirstOrDefault(x=>x.isHost).AppUser.UserName));

            CreateMap<ActivityAttendee, Profiles.Profile>()
            .ForMember(d => d.Displayname, o => o.MapFrom(s => s.AppUser.DisplayName))
            .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName))
            .ForMember(d => d.Bio, o => o.MapFrom(s => s.AppUser.Bio));
        }
    }
}