using System.COllections.Generic;
using MediatR;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>{}
        public class Handler : IRequestHandler<Query, List<Activity>>{
            public Handler(DataContext context){
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query Request, CancellationToken CancellationToken ) {
                return await _context.Activities.ToListAsync();
            }
        }

    }
}