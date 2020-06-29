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

        public void CreateTicket(Ticket ticket)
        {
            if (ticket == null)
                throw new ArgumentNullException(nameof(ticket));
            _context.Tickets.Add(ticket);
        }

        public Ticket GetTicketById(int id)
        {
            return _context.Tickets.FirstOrDefault(p => p.ID == id);
        }

        public IEnumerable<Ticket> GetTickets()
        {
            return _context.Tickets.ToList();
        }

        public bool SaveChanges()
        {
           return  (_context.SaveChanges() >= 0);
        }
    }
}
