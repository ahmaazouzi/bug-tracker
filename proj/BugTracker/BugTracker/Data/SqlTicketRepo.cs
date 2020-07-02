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

        public void DeleteTicket(Ticket ticket)
        {
            if (ticket == null)
                throw new ArgumentNullException(nameof(ticket));
            _context.Tickets.Remove(ticket);
            _context.SaveChanges();
        }

        public Ticket GetTicketById(int id)
        {

            var ticket = _context.Tickets.FirstOrDefault(p => p.ID == id);
            if (ticket != null)
            {
                _context.Entry(ticket).Collection(v => v.Comments).Load();
                _context.Entry(ticket).Collection(t => t.Attachments).Load();
            }

            return ticket;
        }

        public IEnumerable<Ticket> GetTickets()
        {
            return _context.Tickets.ToList();
        }

        public bool SaveChanges()
        {
           return  (_context.SaveChanges() >= 0);
        }

        public void UpdateTicket(Ticket ticket)
        {
            throw new NotImplementedException();
        }
    }
}
