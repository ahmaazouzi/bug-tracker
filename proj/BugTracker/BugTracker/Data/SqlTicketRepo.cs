using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlTicketRepo: ITicketRepo
    {
        private readonly BugTrackerContext _context;

        public SqlTicketRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public Ticket GetTicketById(int id)
        {
            return _context.Tickets.FirstOrDefault(p => p.ID == id);
        }

        public IEnumerable<Ticket> GetTickets()
        {
            return _context.Tickets.ToList();
        }
    }
}
